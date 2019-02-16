#echo $1
#exit

# documentation return boolean
find $1 -type f -name '*idl' | xargs sed -i 's/@return @c/return {boolean}/g'
find $1 -type f -name '*idl' | xargs sed -i 's/@c //g'
find $1 -type f -name '*idl' | xargs sed -i 's/@p //g'

# primitive types
find $1 -type f -name '*idl' | xargs sed -i 's/\bbool\b/boolean/g'
find $1 -type f -name '*idl' | xargs sed -i 's/\bint\b/long/g'

# strings
find $1 -type f -name '*idl' | xargs sed -i 's/const std::string&/DOMString/g'
find $1 -type f -name '*idl' | xargs sed -i 's/std::string/DOMString/g'

# pointers
find $1 -type f -name '*idl' | xargs sed -Ei 's/^  ([\w]+)\*/  \1/g'
find $1 -type f -name '*idl' | xargs sed -Ei 's/^const ([\w]+)\*/\1/g'

# const methods
find $1 -type f -name '*idl' | xargs sed -i 's/ const;$/;/g'
