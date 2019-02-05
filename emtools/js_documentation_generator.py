# Copyright 2019 J Kyle Medley

import re

class Interface:
    def __init__(self, symbol, docstring):
        self.symbol = symbol
        self.docstring = docstring

class JSDocumentationGenerator:
    def __init__(self):
        self.interfaces = []
        self.space_re           = re.compile(r'^[\s]*$')
        self.prefix_re          = re.compile(r'^[\s]*\[Prefix="[^"]+"\][\s]*$')
        self.docstring_start    = re.compile(r'^[\s]*/\*\*.*$')
        self.docstring_continue = re.compile(r'^[\s]*\*.*$')
        self.docstring_stop     = re.compile(r'^[\s]*\*/[\s]*$')

    def parseInterfaceAtLoc(self, interface, lineno, input):
        '''
        Parses the documentation string preceding the interface
        at the given line number.
        '''
        lines = input.splitlines()
        docstring_lines = []
        def collect_docstring_lines(l):
            if l < 0:
                return
            while True:
                l -= 1
                line = lines[l]
                if l < 0:
                    return
                space = self.space_re.match(line)
                if space is not None:
                    continue
                # print('test prefix against',line)
                prefix = self.prefix_re.match(line)
                if prefix is not None:
                    # print('match prefix for',line)
                    continue
                if self.docstring_stop.match(lines[l]) is not None:
                    # print('stop matched for',line)
                    yield line
                    break
                else:
                    return
            while True:
                l -= 1
                line = lines[l]
                if l < 0:
                    return
                cont = self.docstring_continue.match(line)
                start = self.docstring_start.match(line)
                if cont is not None or start is not None:
                    yield line
                else:
                    return

        docstring_lines = tuple(collect_docstring_lines(lineno-1))
        print('lines for',interface)
        print('\n'.join(docstring_lines))
        self.interfaces.append(Interface(interface, docstring_lines))
