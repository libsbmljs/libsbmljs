import sys
import re

filepath = sys.argv[1]
with open(filepath) as f:
    text = f.read()
    lines = text.splitlines()
    n_lines = len(lines)

    arg_exp = re.compile(r'([\w]+) ([\w]+)')
    arg_exp_ulong = re.compile(r'(unsigned long) ([\w]+)')
    def parse_arg_types(args):
        args = args.split(',')
        for arg in args:
            m = arg_exp_ulong.match(arg)
            if m is not None:
                yield m.group(1)
            else:
                m = arg_exp.match(arg)
                if m is not None:
                    yield m.group(1)

    def_exp = re.compile(r'^[\s]*([\w]+) ([\w]+)\(([^)]*)\)[\s]*;[\s]*$')
    def_exp_ulong = re.compile(r'^[\s]*(unsigned long) ([\w]+)\(([^)]*)\)[\s]*;[\s]*$')
    def try_match_def(line):
        m = def_exp_ulong.match(line)
        if m is None:
            m = def_exp.match(line)
            if m is None:
                return None
        return {
            'type': m.group(1),
            'name': m.group(2),
            'arg_types': tuple(parse_arg_types(m.group(3))),
            }

    def map_method_defs(line_num, unmapped_line_nums):
        if line_num >= len(lines):
            return {}
        line = lines[line_num]
        d = try_match_def(line)
        if d is not None:
            return {line_num: d, **{l: d for l in unmapped_line_nums}, **map_method_defs(line_num+1, tuple())}
        else:
            return {**map_method_defs(line_num+1, (line_num,*unmapped_line_nums))}
    method_def_map = map_method_defs(0, tuple())
    # print(method_def_map.keys())

    def transform_type(t):
        if t == 'DOMString':
            return 'string'
        elif t == 'long':
            return 'number'
        elif t == 'unsigned long':
            return 'number'
        else:
            return t

    param_exp = re.compile(r'^([\s]*\* @param )([^{].*)$')
    def try_transform_param(line, line_num):
        param_match = param_exp.match(line)
        if param_match is not None:
            method_def = method_def_map[line_num]
            # print(line,method_def['arg_types'],'\n')
            if len(method_def['arg_types']) == 1:
                # print(param_match.group(1)+'{'+transform_type(method_def['arg_types'][0])+'} '+param_match.group(2),'\n')
                return param_match.group(1)+'{'+transform_type(method_def['arg_types'][0])+'} '+param_match.group(2)

    return_exp = re.compile(r'^([\s]*\* @return )([^{].*)$')
    def try_transform_return(line, line_num):
        m = return_exp.match(line)
        if m is not None:
            method_def = method_def_map[line_num]
            # print(line, ':', method_def['type'])
            # print(m.group(1)+'{'+transform_type(method_def['type'])+'} '+m.group(2),'\n')
            return m.group(1)+'{'+transform_type(method_def['type'])+'} '+m.group(2)

    def transform_lines(lines):
        for line_num,line in enumerate(lines):
            l = try_transform_param(line, line_num)
            if l is None:
                l = try_transform_return(line, line_num)
            if l is not None:
                yield l
            else:
                yield line

    transformed_text = '\n'.join(transform_lines(lines))
    print(transformed_text)
