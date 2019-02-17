#!/usr/bin/env zsh
#echo $1
#exit

# documentation return boolean
find $1 -type f -name '*idl' | xargs sed -i 's/@return @c/return {boolean}/g'
# documentation unrecognized tags
find $1 -type f -name '*idl' | xargs sed -i 's/@c //g'
find $1 -type f -name '*idl' | xargs sed -i 's/@p //g'
# documentation see also
find $1 -type f -name '*idl' | xargs sed -i 's/\* @see.*/*/g'
# documentation notes
find $1 -type f -name '*idl' | xargs sed -i 's/@note/**Note:**/g'
# copydetails
find $1 -type f -name '*idl' | xargs sed -i 's/@copydetails.*$//g'
# libsbml return codes
find $1 -type f -name '*idl' | xargs sed -i 's/@li @sbmlconstant{LIBSBML_OPERATION.*$//g'
find $1 -type f -name '*idl' | xargs sed -i 's/@li @sbmlconstant{LIBSBML_INVALID_ATTRIBUTE_VALUE.*$//g'
find $1 -type f -name '*idl' | xargs sed -Ei 's/^(\s*\*)\s*OperationReturnValues_t}.*$/\1/g'
# collapse trailing docstrings
find $1 -type f -name '*idl' | xargs sed -Ei 'N;s:(\*\s+)+\*/:*/:g;t next;P;D;:next;'
find $1 -type f -name '*idl' | xargs sed -Ei 'N;s:(\*\s+)+\*/:*/:g;t next;P;D;:next;'
find $1 -type f -name '*idl' | xargs sed -Ei 'N;s:(\*\s+)+\*/:*/:g;t next;P;D;:next;'
find $1 -type f -name '*idl' | xargs sed -Ei 'N;s:(\*\s+)+\*/:*/:g;t next;P;D;:next;'
find $1 -type f -name '*idl' | xargs sed -Ei 'N;s:(\*\s+)+\*/:*/:g;t next;P;D;:next;'
find $1 -type f -name '*idl' | xargs sed -Ei 'N;s:(\*\s+)+\*/:*/:g;t next;P;D;:next;'
find $1 -type f -name '*idl' | xargs sed -Ei 'N;s:(\*\s+)+\*/:*/:g;t next;P;D;:next;'
find $1 -type f -name '*idl' | xargs sed -Ei 'N;s:(\*\s+)+\*/:*/:g;t next;P;D;:next;'
find $1 -type f -name '*idl' | xargs sed -Ei 'N;s:(\*\s+)+\*/:*/:g;t next;P;D;:next;'
find $1 -type f -name '*idl' | xargs sed -Ei 'N;s:(\*\s+)+\*/:*/:g;t next;P;D;:next;'
find $1 -type f -name '*idl' | xargs sed -Ei 'N;s:(\*\s+)+\*/:*/:g;t next;P;D;:next;'
find $1 -type f -name '*idl' | xargs sed -Ei 'N;s:(\*\s+)+\*/:*/:g;t next;P;D;:next;'


# primitive types
find $1 -type f -name '*idl' | xargs sed -i 's/\bbool\b/boolean/g'
find $1 -type f -name '*idl' | xargs sed -i 's/\bint\b/long/g'

# strings
find $1 -type f -name '*idl' | xargs sed -i 's/const std::string&/DOMString/g'
find $1 -type f -name '*idl' | xargs sed -i 's/std::string/DOMString/g'

# pointers
find $1 -type f -name '*idl' | xargs sed -Ei 's/^  (\w+)\*/  \1/g'
find $1 -type f -name '*idl' | xargs sed -Ei 's/const (\w+)\*/\1/g'

# const values (usu. enums)
find $1 -type f -name '*idl' | xargs sed -Ei 's/const (\w+)_t/\1_t/g'

# const methods
find $1 -type f -name '*idl' | xargs sed -i 's/ const;$/;/g'

# virtual methods
find $1 -type f -name '*idl' | xargs sed -i 's/virtual //g'

# apply the python script
find $1 -type f -name '*idl' | xargs python3 $( dirname "$0" )/assign_param_return_types.py
