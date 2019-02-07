# Copyright 2019 J Kyle Medley

import re
from jinja2 import Template, Environment, DictLoader

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
)))
jinja_env.trim_blocks = True
jinja_env.lstrip_blocks = True


def process_ast_enum(input_text):
    ast_re = re.compile(r'^[\s]*,?[\s]*(AST_[\w]+)([\s*]=[\s]*[\d]+)?([\s]*/\*.*)?$')

    lines = input_text.splitlines()
    for line in lines:
        m = ast_re.match(line)
        if m is not None:
            print(m.group(1))

    return ''


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
