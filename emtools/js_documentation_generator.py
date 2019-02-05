# Copyright 2019 J Kyle Medley

import re
from jinja2 import Template, Environment, DictLoader

jinja_env = Environment(loader=DictLoader(dict(
    class_wrapper=\
'''{{ docstring }}
export class {{ symbol }} {
{% for member in members %}
{{ member.getDocstring() }}
  {{ member['identifier']}}() {}
{% endfor %}
}
''',
    module=\
'''{{ module_docstring }}
{% for class in classes %}
{{ class }}
{% endfor %}
''',
)))
jinja_env.trim_blocks = True
jinja_env.lstrip_blocks = True

class Member:
    def __init__(self, symbol, docstring_lines):
        self.identifier = symbol
        self.docstring_lines = docstring_lines
        # if self.docstring_lines:
            # print(self.identifier, self.docstring_lines)
    def getDocstring(self):
        return '\n'.join(self.docstring_lines)

class Interface:

    def __init__(self, symbol, docstring_lines):
        self.members = []
        self.symbol = symbol
        self.docstring_lines = docstring_lines


    def add_member(self, member):
        self.members.append(member)


    def render(self):
        return jinja_env.get_template('class_wrapper').render(
            docstring = '\n'.join(self.docstring_lines),
            symbol = self.symbol,
            members = self.members,
        )

class JSDocumentationGenerator:

    def __init__(self, input):
        self.input = input
        self.lines = self.input.splitlines()
        self.module_docstring_lines = tuple()
        self.interfaces = []
        self.space_re           = re.compile(r'^[\s]*$')
        self.prefix_re          = re.compile(r'^[\s]*\[Prefix="[^"]+"\][\s]*$')
        self.docstring_start    = re.compile(r'^[\s]*/\*\*.*$')
        self.docstring_continue = re.compile(r'^[\s]*\*.*$')
        self.docstring_stop     = re.compile(r'^[\s]*\*/[\s]*$')


    def collect_docstring_lines(self,l):
        def collect_docstring_lines_reversed(l):
            if l < 0:
                return
            l += 1
            while True:
                l -= 1
                line = self.lines[l]
                if l < 0:
                    return
                space = self.space_re.match(line)
                if space is not None:
                    continue
                prefix = self.prefix_re.match(line)
                if prefix is not None:
                    continue
                if self.docstring_stop.match(self.lines[l]) is not None:
                    yield line
                    break
                else:
                    return
            while True:
                l -= 1
                line = self.lines[l]
                if l < 0:
                    return
                cont = self.docstring_continue.match(line)
                start = self.docstring_start.match(line)
                if cont is not None or start is not None:
                    yield line
                else:
                    return

        return reversed(tuple(collect_docstring_lines_reversed(l)))


    def parseInterface(self, interface):
        ''' Parse a WebIDL interface.'''
        docstring_lines = self.parseDocstring(interface.location._lineno-3)
        i = Interface(interface.identifier.name, docstring_lines)
        for member in interface.members:
            member.location.resolve()
            member_docstring_lines = self.parseDocstring(member.location._lineno-2)
            # print(member.identifier.name,self.lines[member.location._lineno-2],member_docstring_lines)
            # print(member.location._lineno)
            # print(member_docstring)
            i.add_member(Member(member.identifier.name, member_docstring_lines))
        self.interfaces.append(i)


    def parseDocstring(self, lineno):
        '''
        Parses the documentation string preceding the interface
        at the given line number.
        '''
        return tuple(self.collect_docstring_lines(lineno))


    def parseModuleHeader(self):
        '''
        Parses the documentation for the module itself.
        '''
        def collect_module_docstring_lines(l):
            while True:
                line = self.lines[l]
                if self.docstring_start.match(line) is not None:
                    yield line
                    while True:
                        l += 1
                        line = self.lines[l]
                        if self.docstring_stop.match(self.lines[l]) is not None:
                            yield line
                            return
                        elif self.docstring_continue.match(line) is not None:
                            yield line
                        else:
                            raise RuntimeError('Unrecognized module docstring')
                else:
                    return

        self.module_docstring_lines = tuple(collect_module_docstring_lines(0))


    def render(self):
        return jinja_env.get_template('module').render(
            module_docstring = '\n'.join(self.module_docstring_lines),
            classes = tuple(i.render() for i in self.interfaces),
        )
