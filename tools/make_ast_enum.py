# Copyright 2019 J Kyle Medley

import re
from jinja2 import Template, Environment, DictLoader

jinja_env = Environment(loader=DictLoader(dict(
    enum_wrapper=\
'''/**
 * # Abstract Syntax Tree (AST) representation of amathematical expression.
 *
 * Abstract Syntax Trees (ASTs) are a simple kind of data structure used in
 * libSBML for storing mathematical expressions.  The ASTNode is the
 * cornerstone of libSBML's AST representation.  An AST "node" represents the
 * most basic, indivisible part of a mathematical formula and come in many
 * types.  For instance, there are node types to represent numbers (with
 * subtypes to distinguish integer, real, and rational numbers), names
 * (e.g., constants or variables), simple mathematical operators, logical
 * or relational operators and functions. LibSBML ASTs provide a canonical,
 * in-memory representation for all mathematical formulas regardless of
 * their original format (which might be MathML or might be text strings).
 *
 * The {@link ASTNodeType_t} type contains all permitted AST nodes.
 *
 * ## Converting between ASTs and text strings
 *
 * The text-string form of mathematical formulas handled by {@link SBMLFormulaParser#parseL3Formula}
 * are in a simple C-inspired infix notation.  A
 * formula in this text-string form can be handed to a program that
 * understands SBML mathematical expressions, or used as part
 * of a translation system.
 *
 * The formula strings may contain operators, function calls, symbols, and
 * white space characters.  The allowable white space characters are tab
 * and space.  The following are illustrative examples of formulas
 * expressed in the syntax:
 *
 * ```
 * 0.10 * k4^2
 * (vm * s1)/(km + s1)
 * ```
 *
 * The [libSBML documentation](http://sbml.org/Software/libSBML/5.17.0/docs//cpp-api/_l3_parser_8cpp.html#a58e584e7c21801b34d79fed7a7c05ac8) shows the precedence rules in this syntax.
 *
 * A program parsing a formula in an SBML model should assume that names
 * appearing in the formula are the identifiers of Species, Parameter,
 * Compartment, FunctionDefinition, Reaction (in SBML Levels 2
 * and 3), or SpeciesReference (in SBML Level 3 only) objects
 * defined in a model.  When a function call is involved, the syntax
 * consists of a function identifier, followed by optional white space,
 * followed by an opening parenthesis, followed by a sequence of zero or
 * more arguments separated by commas (with each comma optionally preceded
 * and/or followed by zero or more white space characters), followed by a
 * closing parenthesis.  There is an almost one-to-one mapping between the
 * list of predefined functions available, and those defined in MathML.
 * All of the MathML functions are recognized; this set is larger than the
 * functions defined in SBML Level 1.  In the subset of functions that
 * overlap between MathML and SBML Level 1, there exist a few
 * differences.
 *
 * For constructing ASTs use {@link SBMLFormulaParser#parseL3Formula}.
 */
enum libsbml__idl__ASTNodeType_t {{ symbol }} {
{% for value in enum_values %}
  "libsbml::{{value}}"{{ "," if not loop.last }}
{% endfor %}
};
''',
)))
jinja_env.trim_blocks = True
jinja_env.lstrip_blocks = True

def get_enum_values(lines):
    ast_re = re.compile(r'^[\s]*,?[\s]*(AST_[\w]+)([\s]*=[\s]*[\d]+)?([\s]*/\*.*)?$')
    ast_typecode_re = re.compile(r'^[\s]*,?[\s]*(AST_TYPECODE_[\w]+)([\s]*=[\s]*[\d]+)?([\s]*/\*.*)?$')

    lines = input_text.splitlines()
    for line in lines:
        m = ast_re.match(line)
        if m is not None and ast_typecode_re.match(line) is None:
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
