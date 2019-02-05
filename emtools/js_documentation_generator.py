# Copyright 2019 J Kyle Medley

import re

class JSDocumentationGenerator:
    def __init__(self):
        self.interfaces = []
        self.docstring_start    = re.compile('^[\s]/\*\*.*$')
        self.docstring_continue = re.compile('^[\s]\*.*$')
        self.docstring_stop     = re.compile('^[\s]\*/[\s]*$')

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
            line = lines[l]
            if self.docstring_stop.match(lines[l]) is not None:
                # print('stop matched')
                yield line
            while True:
                l -= 1
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
