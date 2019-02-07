# Copyright 2019 J Kyle Medley

import re
from jinja2 import Template, Environment, DictLoader

jinja_env = Environment(loader=DictLoader(dict(
    enum_wrapper=\
'''enum libsbml__idl__ASTNodeType_t {{ symbol }} {
{% for value in enum_values %}
  "libsbml::{{value}}"{{ "," if not loop.last }}
{% endfor %}
};
''',
)))
jinja_env.trim_blocks = True
jinja_env.lstrip_blocks = True

def get_enum_values(lines):
    ast_re = re.compile(r'^[\s]*,?[\s]*(AST_[\w]+)([\s*]=[\s]*[\d]+)?([\s]*/\*.*)?$')

    lines = input_text.splitlines()
    for line in lines:
        m = ast_re.match(line)
        if m is not None:
            yield m.group(1)

def process_ast_enum(input_text):
    return jinja_env.get_template('enum_wrapper').render(
        enum_values = tuple(get_enum_values(input_text.splitlines())),
        )


if __name__ == '__main__':
    import argparse
    parser = argparse.ArgumentParser(description='Process some integers.')
    parser.add_argument('--input',
                        help='The input file.')
    parser.add_argument('--output',
                        help='The output')

    args = parser.parse_args()

    with open(args.input, 'r') as f:
        input_text = f.read()

    with open(args.output, 'w') as js_docstrings:
        js_docstrings.write(process_ast_enum(input_text))
