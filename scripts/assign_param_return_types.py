import sys
import re

class MethodDef:
    def __init__(self, type, name, arg_types):
        self.type = type
        self.name = name
        self.arg_types = arg_types

for filepath in sys.argv[1:]:
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
            return MethodDef(
                type=m.group(1),
                name=m.group(2),
                arg_types=tuple(parse_arg_types(m.group(3))),
                )

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

        keep_lines = {l: True for l in range(len(lines))}

        def make_sig(method_def):
            return (method_def.type,method_def.name,*method_def.arg_types)

        def get_method_defs(line_num):
            if line_num >= len(lines):
                return {}
            line = lines[line_num]
            d = try_match_def(line)
            if d is not None:
                return {d:line_num, **get_method_defs(line_num+1)}
            else:
                return get_method_defs(line_num+1)
        method_defs = get_method_defs(0)

        blacklisted_methods = ('getId','setId','isSetId','unsetId',
            'getName','setName','isSetName','unsetName')

        sigs = {}
        last_line = 0
        for method_def,line_num in method_defs.items():
            # remove blacklisted methods
            if method_def.name in blacklisted_methods:
                if last_line+1 < line_num:
                    for l in range(last_line+1,line_num):
                        keep_lines[l] = False
            else:
                last_line = line_num
                sig = make_sig(method_def)
                if not sig in sigs:
                    sigs[sig] = line_num
                else:
                    start = sigs[sig]
                    stop = line_num
                    if stop>start:
                        for l in range(start,stop):
                            keep_lines[l] = False
                    else:
                        raise RuntimeError('Start & stop are reversed')

        def transform_type(t):
            if t == 'DOMString':
                return 'string'
            elif t == 'long':
                return 'number'
            elif t == 'unsigned long':
                return 'number'
            elif t.startswith('libsbml__idl__'):
                return t.replace('libsbml__idl__','')
            else:
                return t

        param_exp = re.compile(r'^([\s]*\* @param )([^{].*)$')
        def try_transform_param(line, line_num):
            param_match = param_exp.match(line)
            if param_match is not None:
                method_def = method_def_map[line_num]
                if len(method_def.arg_types) == 1:
                    # print(param_match.group(1)+'{'+transform_type(method_def.arg_types[0])+'} '+param_match.group(2))
                    return param_match.group(1)+'{'+transform_type(method_def.arg_types[0])+'} '+param_match.group(2)

        return_exp = re.compile(r'^([\s]*\* @return )([^{].*)$')
        def try_transform_return(line, line_num):
            m = return_exp.match(line)
            if m is not None:
                method_def = method_def_map[line_num]
                return m.group(1)+'{'+transform_type(method_def.type)+'} '+m.group(2)

        def transform_lines(lines):
            for line_num,line in enumerate(lines):
                l = try_transform_param(line, line_num)
                if l is None:
                    l = try_transform_return(line, line_num)
                if l is not None:
                    yield l
                else:
                    yield line

        transformed_lines = transform_lines(lines)
        transformed_text = '\n'.join(l for n,l in enumerate(transformed_lines) if keep_lines[n])
        # print(transformed_text)

    with open(filepath,'w') as f:
        f.write(transformed_text)
