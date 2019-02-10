/**
 * Cast an object to the given derived type.
 * This method is a [built-in feature of Emscripten](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/WebIDL-Binder.html#pointers-and-comparisons)
 * No type checking is performed.
 * In libsbml.js this method is primarily used to cast {@link SBasePlugin}
 * to a derived type such as {@link FbcModelPlugin} or {@link CompSBasePlugin}.
 *
 * @param  {Object} object The object instance
 * @param  {Type} Class  The target type to cast to
 * @return The instance cast to the derived type
 */
function castObject(object, Class) {}
