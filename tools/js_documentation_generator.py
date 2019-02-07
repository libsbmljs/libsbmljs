# Copyright 2019 J Kyle Medley

import re
from jinja2 import Template, Environment, DictLoader
import WebIDL

jinja_env = Environment(loader=DictLoader(dict(
    class_wrapper=\
'''{{ docstring }}
export class {{ symbol }} {
{% for member in members %}
{{ member.getDocstring() }}
  {% if member.isStatic() %}static {% endif %}{{ member['identifier']}}() {}
{% endfor %}

}
''',
    enum=\
'''{{ docstring }}
const {{ symbol }} = {
{% for value in values %}
  {{ value }}: {{ loop.index0 }}{{ "," if not loop.last }}
{% endfor %}
};
''',
    module=\
'''{{ module_docstring }}

{% for class in classes %}
{{ class }}
{% endfor %}

{% for enum in enums %}
{{ enum.render() }}
{% endfor %}
''',
)))
jinja_env.trim_blocks = True
jinja_env.lstrip_blocks = True

class Method:
    def __init__(self, symbol, docstring_lines, static):
        self.identifier = symbol
        self.docstring_lines = docstring_lines
        self.static = static
        # if self.docstring_lines:
            # print(self.identifier, self.docstring_lines)

    def getDocstring(self):
        return '\n'.join(self.docstring_lines)

    def isStatic(self):
        return self.static


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


class Enum:
    def __init__(self, symbol, docstring_lines, values):
        self.identifier = symbol
        self.docstring_lines = docstring_lines
        self.values = values


    def makeValuesDocstring(self):
        yield ' * ```'
        for v in self.values:
            yield ' * {}'.format(v)
        yield ' * ```'
        return


    def getDocstring(self):
        lines = self.docstring_lines
        if lines:
            lines = lines[:-1] + tuple(self.makeValuesDocstring()) + lines[-1:]
            return '\n'.join(lines)
        else:
            return ''


    def render(self):
        return jinja_env.get_template('enum').render(
            docstring = self.getDocstring(),
            symbol = self.identifier,
            values = self.values,
        )


class JSDocumentationGenerator:
    def __init__(self, input):
        self.input                  = input
        self.lines                  = self.input.splitlines()
        self.module_docstring_lines = tuple()
        self.interfaces             = []
        self.enums                  = []

        self.space_re           = re.compile(r'^[\s]*$')
        self.prefix_re          = re.compile(r'^[\s]*\[Prefix="[^"]+"\][\s]*$')

        self.docstring_start    = re.compile(r'^[\s]*/\*\*.*$')
        self.docstring_continue = re.compile(r'^[\s]*\*.*$')
        self.docstring_stop     = re.compile(r'^[\s]*\*/[\s]*$')

        self.enum_value_re      = re.compile(r'^[\s]*"([^"]+)",?[\s]*$')


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
                # space = self.space_re.match(line)
                # if space is not None:
                #     continue
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
        i = Interface(interface.identifier.name,
            docstring_lines)
        for member in interface.members :
            if member.isMethod():
                member.location.resolve()
                member_docstring_lines = self.parseDocstring(member.location._lineno-2)
                i.add_member(Method(member.identifier.name, member_docstring_lines, member.isStatic()))
        self.interfaces.append(i)


    def parseEnum(self, interface):
        ''' Parse a WebIDL interface.'''
        symbol = interface.identifier.name.split('__idl__')[-1]
        docstring_lines = self.parseDocstring(interface.location._lineno-2)
        enum_values = self.parseEnumValues(interface.location._lineno)
        # print(enum_values)
        e = Enum(symbol, docstring_lines, enum_values)
        self.enums.append(e)


    def parseDocstring(self, lineno):
        '''
        Parses the documentation string preceding the interface
        at the given line number.
        '''
        return tuple(self.collect_docstring_lines(lineno))


    def parseEnumValues(self, lineno):
        def inner(lineno):
            l = lineno
            while l < len(self.lines):
                l += 1
                m = self.enum_value_re.match(self.lines[l])
                if m is not None:
                    yield m.group(1).split('::')[-1]
                    continue
                else:
                    break
        return tuple(inner(lineno-1))


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
            enums = self.enums,
        )

def process_webidl(input_text):
    p = WebIDL.Parser()
    p.parse(input_text)
    data = p.finish()

    doc_gen = JSDocumentationGenerator(input_text)

    doc_gen.parseModuleHeader()
    for thing in data:
      if isinstance(thing, WebIDL.IDLInterface):
        thing.location.resolve()
        doc_gen.parseInterface(thing)
      elif isinstance(thing, WebIDL.IDLEnum):
        thing.location.resolve()
        doc_gen.parseEnum(thing)

    return doc_gen.render()


if __name__ == '__main__':
    import argparse
    parser = argparse.ArgumentParser(description='Process some integers.')
    parser.add_argument('--input',
                        help='The input .idl file.')
    parser.add_argument('--output',
                        help='The output')

    args = parser.parse_args()

    with open(args.input, 'r') as f:
        input_text = f.read()

    with open(args.output, 'w') as js_docstrings:
        js_docstrings.write(process_webidl(input_text))
