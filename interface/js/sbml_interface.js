
// Bindings utilities

function WrapperObject() {
}
WrapperObject.prototype = Object.create(WrapperObject.prototype);
WrapperObject.prototype.constructor = WrapperObject;
WrapperObject.prototype.__class__ = WrapperObject;
WrapperObject.__cache__ = {};
Module['WrapperObject'] = WrapperObject;

function getCache(__class__) {
  return (__class__ || WrapperObject).__cache__;
}
Module['getCache'] = getCache;

function wrapPointer(ptr, __class__) {
  var cache = getCache(__class__);
  var ret = cache[ptr];
  if (ret) return ret;
  ret = Object.create((__class__ || WrapperObject).prototype);
  ret.ptr = ptr;
  return cache[ptr] = ret;
}
Module['wrapPointer'] = wrapPointer;

function idl_wrapBool(val) {
  if(val == 0) {
    return false;
  } else {
    return true;
  }
}
Module['idl_wrapBool'] = idl_wrapBool;

function castObject(obj, __class__) {
  return wrapPointer(obj.ptr, __class__);
}
Module['castObject'] = castObject;

Module['NULL'] = wrapPointer(0);

function destroy(obj) {
  if (!obj['__destroy__']) throw 'Error: Cannot destroy object. (Did you create it yourself?)';
  obj['__destroy__']();
  // Remove from cache, so the object can be GC'd and refs added onto it released
  delete getCache(obj.__class__)[obj.ptr];
}
Module['destroy'] = destroy;

function compare(obj1, obj2) {
  return obj1.ptr === obj2.ptr;
}
Module['compare'] = compare;

function getPointer(obj) {
  return obj.ptr;
}
Module['getPointer'] = getPointer;

function getClass(obj) {
  return obj.__class__;
}
Module['getClass'] = getClass;

// Converts a value into a C-style string.
function ensureString(value) {
  if (typeof value == 'string') return allocate(intArrayFromString(value), 'i8', ALLOC_STACK);
  return value;
}


// ColorDefinition
function ColorDefinition() { throw "cannot construct a ColorDefinition, no constructor in IDL" }
ColorDefinition.prototype = Object.create(WrapperObject.prototype);
ColorDefinition.prototype.constructor = ColorDefinition;
ColorDefinition.prototype.__class__ = ColorDefinition;
ColorDefinition.__cache__ = {};
Module['ColorDefinition'] = ColorDefinition;

ColorDefinition.prototype['getId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_ColorDefinition_getId_0(self));
};

ColorDefinition.prototype['setId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_ColorDefinition_setId_1(self, arg0);
};

ColorDefinition.prototype['isSetId'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_ColorDefinition_isSetId_0(self));
};

ColorDefinition.prototype['createValueString'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_ColorDefinition_createValueString_0(self));
};

ColorDefinition.prototype['setColorValue'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return idl_wrapBool(_emscripten_bind_ColorDefinition_setColorValue_1(self, arg0));
};

ColorDefinition.prototype['setRGBA'] = function(arg0, arg1, arg2, arg3) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  if (arg3 && typeof arg3 === 'object') arg3 = arg3.ptr;
  else arg3 = ensureString(arg3);
  _emscripten_bind_ColorDefinition_setRGBA_4(self, arg0, arg1, arg2, arg3);
};

ColorDefinition.prototype['setRed'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_ColorDefinition_setRed_1(self, arg0);
};

ColorDefinition.prototype['setGreen'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_ColorDefinition_setGreen_1(self, arg0);
};

ColorDefinition.prototype['setBlue'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_ColorDefinition_setBlue_1(self, arg0);
};

ColorDefinition.prototype['setAlpha'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_ColorDefinition_setAlpha_1(self, arg0);
};

ColorDefinition.prototype['getRed'] = function() {
  var self = this.ptr;
  return _emscripten_bind_ColorDefinition_getRed_0(self);
};

ColorDefinition.prototype['getGreen'] = function() {
  var self = this.ptr;
  return _emscripten_bind_ColorDefinition_getGreen_0(self);
};

ColorDefinition.prototype['getBlue'] = function() {
  var self = this.ptr;
  return _emscripten_bind_ColorDefinition_getBlue_0(self);
};

ColorDefinition.prototype['getAlpha'] = function() {
  var self = this.ptr;
  return _emscripten_bind_ColorDefinition_getAlpha_0(self);
};

  ColorDefinition.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_ColorDefinition___destroy___0(self);
}
// GradientBase
function GradientBase() { throw "cannot construct a GradientBase, no constructor in IDL" }
GradientBase.prototype = Object.create(WrapperObject.prototype);
GradientBase.prototype.constructor = GradientBase;
GradientBase.prototype.__class__ = GradientBase;
GradientBase.__cache__ = {};
Module['GradientBase'] = GradientBase;

GradientBase.prototype['getId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_GradientBase_getId_0(self));
};

GradientBase.prototype['setId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_GradientBase_setId_1(self, arg0);
};

GradientBase.prototype['isSetId'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_GradientBase_isSetId_0(self));
};

GradientBase.prototype['getNumGradientStops'] = function() {
  var self = this.ptr;
  return _emscripten_bind_GradientBase_getNumGradientStops_0(self);
};

GradientBase.prototype['getGradientStop'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_GradientBase_getGradientStop_1(self, arg0), GradientStop);
};

GradientBase.prototype['createGradientStop'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_GradientBase_createGradientStop_0(self), GradientStop);
};

  GradientBase.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_GradientBase___destroy___0(self);
}
// GlobalStyle
function GlobalStyle() { throw "cannot construct a GlobalStyle, no constructor in IDL" }
GlobalStyle.prototype = Object.create(WrapperObject.prototype);
GlobalStyle.prototype.constructor = GlobalStyle;
GlobalStyle.prototype.__class__ = GlobalStyle;
GlobalStyle.__cache__ = {};
Module['GlobalStyle'] = GlobalStyle;

GlobalStyle.prototype['getId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_GlobalStyle_getId_0(self));
};

GlobalStyle.prototype['setId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_GlobalStyle_setId_1(self, arg0);
};

GlobalStyle.prototype['isSetId'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_GlobalStyle_isSetId_0(self));
};

GlobalStyle.prototype['getName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_GlobalStyle_getName_0(self));
};

GlobalStyle.prototype['setName'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_GlobalStyle_setName_1(self, arg0);
};

GlobalStyle.prototype['getGroup'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_GlobalStyle_getGroup_0(self), RenderGroup);
};

GlobalStyle.prototype['setGroup'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_GlobalStyle_setGroup_1(self, arg0);
};

GlobalStyle.prototype['getNumRoles'] = function() {
  var self = this.ptr;
  return _emscripten_bind_GlobalStyle_getNumRoles_0(self);
};

GlobalStyle.prototype['createRoleString'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_GlobalStyle_createRoleString_0(self));
};

GlobalStyle.prototype['createTypeString'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_GlobalStyle_createTypeString_0(self));
};

GlobalStyle.prototype['addRole'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_GlobalStyle_addRole_1(self, arg0);
};

GlobalStyle.prototype['isInRoleList'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return idl_wrapBool(_emscripten_bind_GlobalStyle_isInRoleList_1(self, arg0));
};

GlobalStyle.prototype['removeRole'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_GlobalStyle_removeRole_1(self, arg0);
};

GlobalStyle.prototype['getNumTypes'] = function() {
  var self = this.ptr;
  return _emscripten_bind_GlobalStyle_getNumTypes_0(self);
};

GlobalStyle.prototype['addType'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_GlobalStyle_addType_1(self, arg0);
};

GlobalStyle.prototype['isInTypeList'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_GlobalStyle_isInTypeList_1(self, arg0);
};

GlobalStyle.prototype['removeType'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_GlobalStyle_removeType_1(self, arg0);
};

  GlobalStyle.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_GlobalStyle___destroy___0(self);
}
// Layout
function Layout() { throw "cannot construct a Layout, no constructor in IDL" }
Layout.prototype = Object.create(WrapperObject.prototype);
Layout.prototype.constructor = Layout;
Layout.prototype.__class__ = Layout;
Layout.__cache__ = {};
Module['Layout'] = Layout;

Layout.prototype['getId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Layout_getId_0(self));
};

Layout.prototype['setId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Layout_setId_1(self, arg0);
};

Layout.prototype['isSetId'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_Layout_isSetId_0(self));
};

Layout.prototype['getDimensions'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Layout_getDimensions_0(self), Dimensions);
};

Layout.prototype['setDimensions'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Layout_setDimensions_1(self, arg0);
};

Layout.prototype['createAdditionalGraphicalObject'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Layout_createAdditionalGraphicalObject_0(self), GraphicalObject);
};

Layout.prototype['createCompartmentGlyph'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Layout_createCompartmentGlyph_0(self), CompartmentGlyph);
};

Layout.prototype['createCubicBezier'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Layout_createCubicBezier_0(self), CubicBezier);
};

Layout.prototype['createGeneralGlyph'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Layout_createGeneralGlyph_0(self), GeneralGlyph);
};

Layout.prototype['createLineSegment'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Layout_createLineSegment_0(self), LineSegment);
};

Layout.prototype['createReactionGlyph'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Layout_createReactionGlyph_0(self), ReactionGlyph);
};

Layout.prototype['createSpeciesGlyph'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Layout_createSpeciesGlyph_0(self), SpeciesGlyph);
};

Layout.prototype['createSpeciesReferenceGlyph'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Layout_createSpeciesReferenceGlyph_0(self), SpeciesReferenceGlyph);
};

Layout.prototype['createTextGlyph'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Layout_createTextGlyph_0(self), TextGlyph);
};

Layout.prototype['getNumAdditionalGraphicalObjects'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Layout_getNumAdditionalGraphicalObjects_0(self);
};

Layout.prototype['getNumCompartmentGlyphs'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Layout_getNumCompartmentGlyphs_0(self);
};

Layout.prototype['getNumGeneralGlyphs'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Layout_getNumGeneralGlyphs_0(self);
};

Layout.prototype['getNumReactionGlyphs'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Layout_getNumReactionGlyphs_0(self);
};

Layout.prototype['getNumSpeciesGlyphs'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Layout_getNumSpeciesGlyphs_0(self);
};

Layout.prototype['getNumTextGlyphs'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Layout_getNumTextGlyphs_0(self);
};

Layout.prototype['getAdditionalGraphicalObject'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Layout_getAdditionalGraphicalObject_1(self, arg0), GraphicalObject);
};

Layout.prototype['getCompartmentGlyph'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Layout_getCompartmentGlyph_1(self, arg0), CompartmentGlyph);
};

Layout.prototype['getGeneralGlyph'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Layout_getGeneralGlyph_1(self, arg0), GeneralGlyph);
};

Layout.prototype['getReactionGlyph'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Layout_getReactionGlyph_1(self, arg0), ReactionGlyph);
};

Layout.prototype['getSpeciesGlyph'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Layout_getSpeciesGlyph_1(self, arg0), SpeciesGlyph);
};

Layout.prototype['getTextGlyph'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Layout_getTextGlyph_1(self, arg0), TextGlyph);
};

Layout.prototype['removeAdditionalGraphicalObject'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Layout_removeAdditionalGraphicalObject_1(self, arg0), GraphicalObject);
};

Layout.prototype['removeCompartmentGlyph'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Layout_removeCompartmentGlyph_1(self, arg0), CompartmentGlyph);
};

Layout.prototype['removeReactionGlyph'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Layout_removeReactionGlyph_1(self, arg0), ReactionGlyph);
};

Layout.prototype['removeSpeciesGlyph'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Layout_removeSpeciesGlyph_1(self, arg0), SpeciesGlyph);
};

Layout.prototype['removeSpeciesReferenceGlyph'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Layout_removeSpeciesReferenceGlyph_1(self, arg0), SpeciesReferenceGlyph);
};

Layout.prototype['removeTextGlyph'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Layout_removeTextGlyph_1(self, arg0), TextGlyph);
};

Layout.prototype['getPlugin'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Layout_getPlugin_1(self, arg0), SBasePlugin);
};

  Layout.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_Layout___destroy___0(self);
}
// SBMLFormulaParser
function SBMLFormulaParser() {
  this.ptr = _emscripten_bind_SBMLFormulaParser_SBMLFormulaParser_0();
  getCache(SBMLFormulaParser)[this.ptr] = this;
};
SBMLFormulaParser.prototype = Object.create(WrapperObject.prototype);
SBMLFormulaParser.prototype.constructor = SBMLFormulaParser;
SBMLFormulaParser.prototype.__class__ = SBMLFormulaParser;
SBMLFormulaParser.__cache__ = {};
Module['SBMLFormulaParser'] = SBMLFormulaParser;

SBMLFormulaParser.prototype['parseL3Formula'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_SBMLFormulaParser_parseL3Formula_1(self, arg0), ASTNode);
};

SBMLFormulaParser.prototype['parseFormula'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_SBMLFormulaParser_parseFormula_1(self, arg0), ASTNode);
};

  SBMLFormulaParser.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_SBMLFormulaParser___destroy___0(self);
}
// CubicBezier
function CubicBezier() { throw "cannot construct a CubicBezier, no constructor in IDL" }
CubicBezier.prototype = Object.create(WrapperObject.prototype);
CubicBezier.prototype.constructor = CubicBezier;
CubicBezier.prototype.__class__ = CubicBezier;
CubicBezier.__cache__ = {};
Module['CubicBezier'] = CubicBezier;

CubicBezier.prototype['getId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_CubicBezier_getId_0(self));
};

CubicBezier.prototype['setId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_CubicBezier_setId_1(self, arg0);
};

CubicBezier.prototype['isSetId'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_CubicBezier_isSetId_0(self));
};

CubicBezier.prototype['getStart'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_CubicBezier_getStart_0(self), Point);
};

CubicBezier.prototype['setStart'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_CubicBezier_setStart_1(self, arg0);
};

CubicBezier.prototype['getEnd'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_CubicBezier_getEnd_0(self), Point);
};

CubicBezier.prototype['setEnd'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_CubicBezier_setEnd_1(self, arg0);
};

CubicBezier.prototype['getBasePoint1'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_CubicBezier_getBasePoint1_0(self), Point);
};

CubicBezier.prototype['setBasePoint1'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_CubicBezier_setBasePoint1_1(self, arg0);
};

CubicBezier.prototype['getBasePoint2'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_CubicBezier_getBasePoint2_0(self), Point);
};

CubicBezier.prototype['setBasePoint2'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_CubicBezier_setBasePoint2_1(self, arg0);
};

  CubicBezier.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_CubicBezier___destroy___0(self);
}
// RenderPoint
function RenderPoint() { throw "cannot construct a RenderPoint, no constructor in IDL" }
RenderPoint.prototype = Object.create(WrapperObject.prototype);
RenderPoint.prototype.constructor = RenderPoint;
RenderPoint.prototype.__class__ = RenderPoint;
RenderPoint.__cache__ = {};
Module['RenderPoint'] = RenderPoint;

RenderPoint.prototype['x'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_RenderPoint_x_0(self), RelAbsVector);
};

RenderPoint.prototype['y'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_RenderPoint_y_0(self), RelAbsVector);
};

RenderPoint.prototype['z'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_RenderPoint_z_0(self), RelAbsVector);
};

RenderPoint.prototype['setX'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_RenderPoint_setX_1(self, arg0);
};

RenderPoint.prototype['setY'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_RenderPoint_setY_1(self, arg0);
};

RenderPoint.prototype['setZ'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_RenderPoint_setZ_1(self, arg0);
};

RenderPoint.prototype['setCoordinates'] = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  _emscripten_bind_RenderPoint_setCoordinates_3(self, arg0, arg1, arg2);
};

RenderPoint.prototype['initDefaults'] = function() {
  var self = this.ptr;
  _emscripten_bind_RenderPoint_initDefaults_0(self);
};

RenderPoint.prototype['getElementName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_RenderPoint_getElementName_0(self));
};

RenderPoint.prototype['hasRequiredElements'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_RenderPoint_hasRequiredElements_0(self));
};

  RenderPoint.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_RenderPoint___destroy___0(self);
}
// LocalRenderInformation
function LocalRenderInformation() { throw "cannot construct a LocalRenderInformation, no constructor in IDL" }
LocalRenderInformation.prototype = Object.create(WrapperObject.prototype);
LocalRenderInformation.prototype.constructor = LocalRenderInformation;
LocalRenderInformation.prototype.__class__ = LocalRenderInformation;
LocalRenderInformation.__cache__ = {};
Module['LocalRenderInformation'] = LocalRenderInformation;

LocalRenderInformation.prototype['getId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_LocalRenderInformation_getId_0(self));
};

LocalRenderInformation.prototype['setId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_LocalRenderInformation_setId_1(self, arg0);
};

LocalRenderInformation.prototype['isSetId'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_LocalRenderInformation_isSetId_0(self));
};

LocalRenderInformation.prototype['getName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_LocalRenderInformation_getName_0(self));
};

LocalRenderInformation.prototype['setName'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_LocalRenderInformation_setName_1(self, arg0);
};

LocalRenderInformation.prototype['isSetName'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_LocalRenderInformation_isSetName_0(self));
};

LocalRenderInformation.prototype['getProgramVersion'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_LocalRenderInformation_getProgramVersion_0(self));
};

LocalRenderInformation.prototype['setProgramVersion'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_LocalRenderInformation_setProgramVersion_1(self, arg0);
};

LocalRenderInformation.prototype['getProgramName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_LocalRenderInformation_getProgramName_0(self));
};

LocalRenderInformation.prototype['setProgramName'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_LocalRenderInformation_setProgramName_1(self, arg0);
};

LocalRenderInformation.prototype['getBackgroundColor'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_LocalRenderInformation_getBackgroundColor_0(self));
};

LocalRenderInformation.prototype['setBackgroundColor'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_LocalRenderInformation_setBackgroundColor_1(self, arg0);
};

LocalRenderInformation.prototype['getNumColorDefinitions'] = function() {
  var self = this.ptr;
  return _emscripten_bind_LocalRenderInformation_getNumColorDefinitions_0(self);
};

LocalRenderInformation.prototype['getColorDefinition'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_LocalRenderInformation_getColorDefinition_1(self, arg0), ColorDefinition);
};

LocalRenderInformation.prototype['createColorDefinition'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_LocalRenderInformation_createColorDefinition_0(self), ColorDefinition);
};

LocalRenderInformation.prototype['removeColorDefinition'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_LocalRenderInformation_removeColorDefinition_1(self, arg0), ColorDefinition);
};

LocalRenderInformation.prototype['getNumGradientDefinitions'] = function() {
  var self = this.ptr;
  return _emscripten_bind_LocalRenderInformation_getNumGradientDefinitions_0(self);
};

LocalRenderInformation.prototype['getGradientDefinition'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_LocalRenderInformation_getGradientDefinition_1(self, arg0), GradientBase);
};

LocalRenderInformation.prototype['createLinearGradientDefinition'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_LocalRenderInformation_createLinearGradientDefinition_0(self), LinearGradient);
};

LocalRenderInformation.prototype['createRadialGradientDefinition'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_LocalRenderInformation_createRadialGradientDefinition_0(self), RadialGradient);
};

LocalRenderInformation.prototype['removeGradientDefinition'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_LocalRenderInformation_removeGradientDefinition_1(self, arg0), GradientBase);
};

LocalRenderInformation.prototype['getNumLineEndings'] = function() {
  var self = this.ptr;
  return _emscripten_bind_LocalRenderInformation_getNumLineEndings_0(self);
};

LocalRenderInformation.prototype['getLineEnding'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_LocalRenderInformation_getLineEnding_1(self, arg0), LineEnding);
};

LocalRenderInformation.prototype['createLineEnding'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_LocalRenderInformation_createLineEnding_0(self), LineEnding);
};

LocalRenderInformation.prototype['removeLineEnding'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_LocalRenderInformation_removeLineEnding_1(self, arg0), LineEnding);
};

LocalRenderInformation.prototype['getNumStyles'] = function() {
  var self = this.ptr;
  return _emscripten_bind_LocalRenderInformation_getNumStyles_0(self);
};

LocalRenderInformation.prototype['getStyle'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_LocalRenderInformation_getStyle_1(self, arg0), LocalStyle);
};

LocalRenderInformation.prototype['createStyle'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_LocalRenderInformation_createStyle_1(self, arg0), LocalStyle);
};

  LocalRenderInformation.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_LocalRenderInformation___destroy___0(self);
}
// AssignmentRule
function AssignmentRule() { throw "cannot construct a AssignmentRule, no constructor in IDL" }
AssignmentRule.prototype = Object.create(WrapperObject.prototype);
AssignmentRule.prototype.constructor = AssignmentRule;
AssignmentRule.prototype.__class__ = AssignmentRule;
AssignmentRule.__cache__ = {};
Module['AssignmentRule'] = AssignmentRule;

AssignmentRule.prototype['getMetaId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_AssignmentRule_getMetaId_0(self));
};

AssignmentRule.prototype['setMetaId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_AssignmentRule_setMetaId_1(self, arg0);
};

AssignmentRule.prototype['isSetMetaId'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_AssignmentRule_isSetMetaId_0(self));
};

AssignmentRule.prototype['getSBOTerm'] = function() {
  var self = this.ptr;
  return _emscripten_bind_AssignmentRule_getSBOTerm_0(self);
};

AssignmentRule.prototype['setSBOTerm'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_AssignmentRule_setSBOTerm_1(self, arg0);
};

AssignmentRule.prototype['isSetSBOTerm'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_AssignmentRule_isSetSBOTerm_0(self));
};

AssignmentRule.prototype['getVariable'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_AssignmentRule_getVariable_0(self));
};

AssignmentRule.prototype['setVariable'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_AssignmentRule_setVariable_1(self, arg0);
};

AssignmentRule.prototype['isSetVariable'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_AssignmentRule_isSetVariable_0(self));
};

AssignmentRule.prototype['getMath'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_AssignmentRule_getMath_0(self), ASTNode);
};

AssignmentRule.prototype['setMath'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_AssignmentRule_setMath_1(self, arg0);
};

AssignmentRule.prototype['isSetMath'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_AssignmentRule_isSetMath_0(self));
};

AssignmentRule.prototype['getFormula'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_AssignmentRule_getFormula_0(self));
};

AssignmentRule.prototype['setFormula'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_AssignmentRule_setFormula_1(self, arg0);
};

AssignmentRule.prototype['isParameter'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_AssignmentRule_isParameter_0(self));
};

  AssignmentRule.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_AssignmentRule___destroy___0(self);
}
// KineticLaw
function KineticLaw() { throw "cannot construct a KineticLaw, no constructor in IDL" }
KineticLaw.prototype = Object.create(WrapperObject.prototype);
KineticLaw.prototype.constructor = KineticLaw;
KineticLaw.prototype.__class__ = KineticLaw;
KineticLaw.__cache__ = {};
Module['KineticLaw'] = KineticLaw;

KineticLaw.prototype['getMath'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_KineticLaw_getMath_0(self), ASTNode);
};

KineticLaw.prototype['setMath'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_KineticLaw_setMath_1(self, arg0);
};

KineticLaw.prototype['isSetMath'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_KineticLaw_isSetMath_0(self));
};

KineticLaw.prototype['getMetaId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_KineticLaw_getMetaId_0(self));
};

KineticLaw.prototype['setMetaId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_KineticLaw_setMetaId_1(self, arg0);
};

KineticLaw.prototype['getNumLocalParameters'] = function() {
  var self = this.ptr;
  return _emscripten_bind_KineticLaw_getNumLocalParameters_0(self);
};

KineticLaw.prototype['createLocalParameter'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_KineticLaw_createLocalParameter_0(self), LocalParameter);
};

KineticLaw.prototype['getLocalParameter'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_KineticLaw_getLocalParameter_1(self, arg0), LocalParameter);
};

KineticLaw.prototype['getNumParameters'] = function() {
  var self = this.ptr;
  return _emscripten_bind_KineticLaw_getNumParameters_0(self);
};

KineticLaw.prototype['createParameter'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_KineticLaw_createParameter_0(self), Parameter);
};

KineticLaw.prototype['getParameter'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_KineticLaw_getParameter_1(self, arg0), Parameter);
};

KineticLaw.prototype['getFormula'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_KineticLaw_getFormula_0(self));
};

KineticLaw.prototype['setFormula'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_KineticLaw_setFormula_1(self, arg0);
};

  KineticLaw.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_KineticLaw___destroy___0(self);
}
// Capabilities
function Capabilities() {
  this.ptr = _emscripten_bind_Capabilities_Capabilities_0();
  getCache(Capabilities)[this.ptr] = this;
};
Capabilities.prototype = Object.create(WrapperObject.prototype);
Capabilities.prototype.constructor = Capabilities;
Capabilities.prototype.__class__ = Capabilities;
Capabilities.__cache__ = {};
Module['Capabilities'] = Capabilities;

Capabilities.prototype['isLayoutSupported'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_Capabilities_isLayoutSupported_0(self));
};

Capabilities.prototype['isRenderSupported'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_Capabilities_isRenderSupported_0(self));
};

  Capabilities.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_Capabilities___destroy___0(self);
}
// RenderCaster
function RenderCaster() {
  this.ptr = _emscripten_bind_RenderCaster_RenderCaster_0();
  getCache(RenderCaster)[this.ptr] = this;
};
RenderCaster.prototype = Object.create(WrapperObject.prototype);
RenderCaster.prototype.constructor = RenderCaster;
RenderCaster.prototype.__class__ = RenderCaster;
RenderCaster.__cache__ = {};
Module['RenderCaster'] = RenderCaster;

RenderCaster.prototype['castToRenderListOfLayoutsPlugin'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_RenderCaster_castToRenderListOfLayoutsPlugin_1(self, arg0), RenderListOfLayoutsPlugin);
};

RenderCaster.prototype['castToRenderLayoutPlugin'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_RenderCaster_castToRenderLayoutPlugin_1(self, arg0), RenderLayoutPlugin);
};

  RenderCaster.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_RenderCaster___destroy___0(self);
}
// LineEnding
function LineEnding() { throw "cannot construct a LineEnding, no constructor in IDL" }
LineEnding.prototype = Object.create(WrapperObject.prototype);
LineEnding.prototype.constructor = LineEnding;
LineEnding.prototype.__class__ = LineEnding;
LineEnding.__cache__ = {};
Module['LineEnding'] = LineEnding;

LineEnding.prototype['getId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_LineEnding_getId_0(self));
};

LineEnding.prototype['setId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_LineEnding_setId_1(self, arg0);
};

LineEnding.prototype['isSetId'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_LineEnding_isSetId_0(self));
};

LineEnding.prototype['getGroup'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_LineEnding_getGroup_0(self), RenderGroup);
};

LineEnding.prototype['setGroup'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_LineEnding_setGroup_1(self, arg0);
};

LineEnding.prototype['getIsEnabledRotationalMapping'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_LineEnding_getIsEnabledRotationalMapping_0(self));
};

LineEnding.prototype['setEnableRotationalMapping'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_LineEnding_setEnableRotationalMapping_1(self, arg0);
};

LineEnding.prototype['getBoundingBox'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_LineEnding_getBoundingBox_0(self), BoundingBox);
};

LineEnding.prototype['setBoundingBox'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_LineEnding_setBoundingBox_1(self, arg0);
};

  LineEnding.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_LineEnding___destroy___0(self);
}
// RenderExtensionWrapper
function RenderExtensionWrapper() {
  this.ptr = _emscripten_bind_RenderExtensionWrapper_RenderExtensionWrapper_0();
  getCache(RenderExtensionWrapper)[this.ptr] = this;
};
RenderExtensionWrapper.prototype = Object.create(WrapperObject.prototype);
RenderExtensionWrapper.prototype.constructor = RenderExtensionWrapper;
RenderExtensionWrapper.prototype.__class__ = RenderExtensionWrapper;
RenderExtensionWrapper.__cache__ = {};
Module['RenderExtensionWrapper'] = RenderExtensionWrapper;

RenderExtensionWrapper.prototype['getXmlnsL2'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_RenderExtensionWrapper_getXmlnsL2_0(self));
};

RenderExtensionWrapper.prototype['getXmlnsL3V1V1'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_RenderExtensionWrapper_getXmlnsL3V1V1_0(self));
};

  RenderExtensionWrapper.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_RenderExtensionWrapper___destroy___0(self);
}
// Dimensions
function Dimensions(arg0, arg1, arg2, arg3) {
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  if (arg3 && typeof arg3 === 'object') arg3 = arg3.ptr;
  else arg3 = ensureString(arg3);
  this.ptr = _emscripten_bind_Dimensions_Dimensions_4(arg0, arg1, arg2, arg3);
  getCache(Dimensions)[this.ptr] = this;
};
Dimensions.prototype = Object.create(WrapperObject.prototype);
Dimensions.prototype.constructor = Dimensions;
Dimensions.prototype.__class__ = Dimensions;
Dimensions.__cache__ = {};
Module['Dimensions'] = Dimensions;

Dimensions.prototype['setWidth'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Dimensions_setWidth_1(self, arg0);
};

Dimensions.prototype['setHeight'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Dimensions_setHeight_1(self, arg0);
};

Dimensions.prototype['setDepth'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Dimensions_setDepth_1(self, arg0);
};

Dimensions.prototype['getWidth'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Dimensions_getWidth_0(self);
};

Dimensions.prototype['getHeight'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Dimensions_getHeight_0(self);
};

Dimensions.prototype['getDepth'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Dimensions_getDepth_0(self);
};

  Dimensions.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_Dimensions___destroy___0(self);
}
// GraphicalObject
function GraphicalObject() { throw "cannot construct a GraphicalObject, no constructor in IDL" }
GraphicalObject.prototype = Object.create(WrapperObject.prototype);
GraphicalObject.prototype.constructor = GraphicalObject;
GraphicalObject.prototype.__class__ = GraphicalObject;
GraphicalObject.__cache__ = {};
Module['GraphicalObject'] = GraphicalObject;

GraphicalObject.prototype['getId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_GraphicalObject_getId_0(self));
};

GraphicalObject.prototype['setId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_GraphicalObject_setId_1(self, arg0);
};

GraphicalObject.prototype['isSetId'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_GraphicalObject_isSetId_0(self));
};

  GraphicalObject.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_GraphicalObject___destroy___0(self);
}
// LayoutCaster
function LayoutCaster() {
  this.ptr = _emscripten_bind_LayoutCaster_LayoutCaster_0();
  getCache(LayoutCaster)[this.ptr] = this;
};
LayoutCaster.prototype = Object.create(WrapperObject.prototype);
LayoutCaster.prototype.constructor = LayoutCaster;
LayoutCaster.prototype.__class__ = LayoutCaster;
LayoutCaster.__cache__ = {};
Module['LayoutCaster'] = LayoutCaster;

LayoutCaster.prototype['castToLayoutPlugin'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_LayoutCaster_castToLayoutPlugin_1(self, arg0), LayoutModelPlugin);
};

  LayoutCaster.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_LayoutCaster___destroy___0(self);
}
// Compartment
function Compartment() { throw "cannot construct a Compartment, no constructor in IDL" }
Compartment.prototype = Object.create(WrapperObject.prototype);
Compartment.prototype.constructor = Compartment;
Compartment.prototype.__class__ = Compartment;
Compartment.__cache__ = {};
Module['Compartment'] = Compartment;

Compartment.prototype['getId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Compartment_getId_0(self));
};

Compartment.prototype['setId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_Compartment_setId_1(self, arg0);
};

Compartment.prototype['getMetaId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Compartment_getMetaId_0(self));
};

Compartment.prototype['setMetaId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_Compartment_setMetaId_1(self, arg0);
};

Compartment.prototype['getSize'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Compartment_getSize_0(self);
};

Compartment.prototype['setSize'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_Compartment_setSize_1(self, arg0);
};

Compartment.prototype['isSetSize'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_Compartment_isSetSize_0(self));
};

Compartment.prototype['getVolume'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Compartment_getVolume_0(self);
};

Compartment.prototype['setVolume'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_Compartment_setVolume_1(self, arg0);
};

Compartment.prototype['getUnits'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Compartment_getUnits_0(self));
};

Compartment.prototype['setUnits'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_Compartment_setUnits_1(self, arg0);
};

Compartment.prototype['isSetUnits'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_Compartment_isSetUnits_0(self));
};

Compartment.prototype['getSBOTerm'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Compartment_getSBOTerm_0(self);
};

Compartment.prototype['setSBOTerm'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_Compartment_setSBOTerm_1(self, arg0);
};

Compartment.prototype['isSetSBOTerm'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_Compartment_isSetSBOTerm_0(self));
};

  Compartment.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_Compartment___destroy___0(self);
}
// Parameter
function Parameter() { throw "cannot construct a Parameter, no constructor in IDL" }
Parameter.prototype = Object.create(WrapperObject.prototype);
Parameter.prototype.constructor = Parameter;
Parameter.prototype.__class__ = Parameter;
Parameter.__cache__ = {};
Module['Parameter'] = Parameter;

Parameter.prototype['getId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Parameter_getId_0(self));
};

Parameter.prototype['setId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return idl_wrapBool(_emscripten_bind_Parameter_setId_1(self, arg0));
};

Parameter.prototype['getName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Parameter_getName_0(self));
};

Parameter.prototype['setName'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_Parameter_setName_1(self, arg0);
};

Parameter.prototype['isSetName'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_Parameter_isSetName_0(self));
};

Parameter.prototype['getValue'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Parameter_getValue_0(self);
};

Parameter.prototype['setValue'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_Parameter_setValue_1(self, arg0);
};

Parameter.prototype['isSetValue'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_Parameter_isSetValue_0(self));
};

Parameter.prototype['isSetUnits'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_Parameter_isSetUnits_0(self));
};

Parameter.prototype['getUnits'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Parameter_getUnits_0(self));
};

Parameter.prototype['setUnits'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_Parameter_setUnits_1(self, arg0);
};

  Parameter.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_Parameter___destroy___0(self);
}
// CurveCaster
function CurveCaster() {
  this.ptr = _emscripten_bind_CurveCaster_CurveCaster_0();
  getCache(CurveCaster)[this.ptr] = this;
};
CurveCaster.prototype = Object.create(WrapperObject.prototype);
CurveCaster.prototype.constructor = CurveCaster;
CurveCaster.prototype.__class__ = CurveCaster;
CurveCaster.__cache__ = {};
Module['CurveCaster'] = CurveCaster;

CurveCaster.prototype['isCubicBezier'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return idl_wrapBool(_emscripten_bind_CurveCaster_isCubicBezier_1(self, arg0));
};

CurveCaster.prototype['castToCubicBezier'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_CurveCaster_castToCubicBezier_1(self, arg0), CubicBezier);
};

  CurveCaster.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_CurveCaster___destroy___0(self);
}
// Rectangle
function Rectangle() { throw "cannot construct a Rectangle, no constructor in IDL" }
Rectangle.prototype = Object.create(WrapperObject.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.__class__ = Rectangle;
Rectangle.__cache__ = {};
Module['Rectangle'] = Rectangle;

Rectangle.prototype['setCoordinatesAndSize'] = function(arg0, arg1, arg2, arg3, arg4) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  if (arg3 && typeof arg3 === 'object') arg3 = arg3.ptr;
  else arg3 = ensureString(arg3);
  if (arg4 && typeof arg4 === 'object') arg4 = arg4.ptr;
  else arg4 = ensureString(arg4);
  _emscripten_bind_Rectangle_setCoordinatesAndSize_5(self, arg0, arg1, arg2, arg3, arg4);
};

Rectangle.prototype['setCoordinates'] = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  _emscripten_bind_Rectangle_setCoordinates_3(self, arg0, arg1, arg2);
};

Rectangle.prototype['setSize'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_Rectangle_setSize_2(self, arg0, arg1);
};

Rectangle.prototype['setWidth'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Rectangle_setWidth_1(self, arg0);
};

Rectangle.prototype['setHeight'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Rectangle_setHeight_1(self, arg0);
};

Rectangle.prototype['setRadii'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_Rectangle_setRadii_2(self, arg0, arg1);
};

Rectangle.prototype['setRadiusX'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Rectangle_setRadiusX_1(self, arg0);
};

Rectangle.prototype['setRadiusY'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Rectangle_setRadiusY_1(self, arg0);
};

Rectangle.prototype['setX'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Rectangle_setX_1(self, arg0);
};

Rectangle.prototype['setY'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Rectangle_setY_1(self, arg0);
};

Rectangle.prototype['setZ'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Rectangle_setZ_1(self, arg0);
};

Rectangle.prototype['getX'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Rectangle_getX_0(self), RelAbsVector);
};

Rectangle.prototype['getY'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Rectangle_getY_0(self), RelAbsVector);
};

Rectangle.prototype['getZ'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Rectangle_getZ_0(self), RelAbsVector);
};

Rectangle.prototype['getWidth'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Rectangle_getWidth_0(self), RelAbsVector);
};

Rectangle.prototype['getHeight'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Rectangle_getHeight_0(self), RelAbsVector);
};

Rectangle.prototype['getRadiusX'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Rectangle_getRadiusX_0(self), RelAbsVector);
};

Rectangle.prototype['getRadiusY'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Rectangle_getRadiusY_0(self), RelAbsVector);
};

Rectangle.prototype['getTypeCode'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Rectangle_getTypeCode_0(self);
};

  Rectangle.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_Rectangle___destroy___0(self);
}
// ASTNode
function ASTNode() { throw "cannot construct a ASTNode, no constructor in IDL" }
ASTNode.prototype = Object.create(WrapperObject.prototype);
ASTNode.prototype.constructor = ASTNode;
ASTNode.prototype.__class__ = ASTNode;
ASTNode.__cache__ = {};
Module['ASTNode'] = ASTNode;

ASTNode.prototype['getNumChildren'] = function() {
  var self = this.ptr;
  return _emscripten_bind_ASTNode_getNumChildren_0(self);
};

ASTNode.prototype['getChild'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_ASTNode_getChild_1(self, arg0), ASTNode);
};

ASTNode.prototype['getType'] = function() {
  var self = this.ptr;
  return _emscripten_bind_ASTNode_getType_0(self);
};

ASTNode.prototype['isSetUnits'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_ASTNode_isSetUnits_0(self));
};

ASTNode.prototype['getUnits'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_ASTNode_getUnits_0(self));
};

ASTNode.prototype['setUnits'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_ASTNode_setUnits_1(self, arg0);
};

ASTNode.prototype['getName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_ASTNode_getName_0(self));
};

ASTNode.prototype['setName'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_ASTNode_setName_1(self, arg0);
};

  ASTNode.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_ASTNode___destroy___0(self);
}
// SBMLErrorLog
function SBMLErrorLog() { throw "cannot construct a SBMLErrorLog, no constructor in IDL" }
SBMLErrorLog.prototype = Object.create(WrapperObject.prototype);
SBMLErrorLog.prototype.constructor = SBMLErrorLog;
SBMLErrorLog.prototype.__class__ = SBMLErrorLog;
SBMLErrorLog.__cache__ = {};
Module['SBMLErrorLog'] = SBMLErrorLog;

  SBMLErrorLog.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_SBMLErrorLog___destroy___0(self);
}
// RadialGradient
function RadialGradient() { throw "cannot construct a RadialGradient, no constructor in IDL" }
RadialGradient.prototype = Object.create(WrapperObject.prototype);
RadialGradient.prototype.constructor = RadialGradient;
RadialGradient.prototype.__class__ = RadialGradient;
RadialGradient.__cache__ = {};
Module['RadialGradient'] = RadialGradient;

RadialGradient.prototype['getId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_RadialGradient_getId_0(self));
};

RadialGradient.prototype['setId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_RadialGradient_setId_1(self, arg0);
};

RadialGradient.prototype['isSetId'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_RadialGradient_isSetId_0(self));
};

RadialGradient.prototype['getNumGradientStops'] = function() {
  var self = this.ptr;
  return _emscripten_bind_RadialGradient_getNumGradientStops_0(self);
};

RadialGradient.prototype['getGradientStop'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_RadialGradient_getGradientStop_1(self, arg0), GradientStop);
};

RadialGradient.prototype['createGradientStop'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_RadialGradient_createGradientStop_0(self), GradientStop);
};

  RadialGradient.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_RadialGradient___destroy___0(self);
}
// VoidPtr
function VoidPtr() { throw "cannot construct a VoidPtr, no constructor in IDL" }
VoidPtr.prototype = Object.create(WrapperObject.prototype);
VoidPtr.prototype.constructor = VoidPtr;
VoidPtr.prototype.__class__ = VoidPtr;
VoidPtr.__cache__ = {};
Module['VoidPtr'] = VoidPtr;

  VoidPtr.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_VoidPtr___destroy___0(self);
}
// RateRule
function RateRule() { throw "cannot construct a RateRule, no constructor in IDL" }
RateRule.prototype = Object.create(WrapperObject.prototype);
RateRule.prototype.constructor = RateRule;
RateRule.prototype.__class__ = RateRule;
RateRule.__cache__ = {};
Module['RateRule'] = RateRule;

RateRule.prototype['getMetaId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_RateRule_getMetaId_0(self));
};

RateRule.prototype['setMetaId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_RateRule_setMetaId_1(self, arg0);
};

RateRule.prototype['isSetMetaId'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_RateRule_isSetMetaId_0(self));
};

RateRule.prototype['getSBOTerm'] = function() {
  var self = this.ptr;
  return _emscripten_bind_RateRule_getSBOTerm_0(self);
};

RateRule.prototype['setSBOTerm'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_RateRule_setSBOTerm_1(self, arg0);
};

RateRule.prototype['isSetSBOTerm'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_RateRule_isSetSBOTerm_0(self));
};

RateRule.prototype['getFormula'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_RateRule_getFormula_0(self));
};

RateRule.prototype['setFormula'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_RateRule_setFormula_1(self, arg0);
};

RateRule.prototype['getMath'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_RateRule_getMath_0(self), ASTNode);
};

RateRule.prototype['setMath'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_RateRule_setMath_1(self, arg0);
};

RateRule.prototype['isSetMath'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_RateRule_isSetMath_0(self));
};

RateRule.prototype['isParameter'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_RateRule_isParameter_0(self));
};

  RateRule.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_RateRule___destroy___0(self);
}
// RelAbsVector
function RelAbsVector(arg0, arg1) {
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg0 === undefined) { this.ptr = _emscripten_bind_RelAbsVector_RelAbsVector_0(); getCache(RelAbsVector)[this.ptr] = this;return }
  if (arg1 === undefined) { this.ptr = _emscripten_bind_RelAbsVector_RelAbsVector_1(arg0); getCache(RelAbsVector)[this.ptr] = this;return }
  this.ptr = _emscripten_bind_RelAbsVector_RelAbsVector_2(arg0, arg1);
  getCache(RelAbsVector)[this.ptr] = this;
};
RelAbsVector.prototype = Object.create(WrapperObject.prototype);
RelAbsVector.prototype.constructor = RelAbsVector;
RelAbsVector.prototype.__class__ = RelAbsVector;
RelAbsVector.__cache__ = {};
Module['RelAbsVector'] = RelAbsVector;

RelAbsVector.prototype['setCoordinate'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_RelAbsVector_setCoordinate_2(self, arg0, arg1);
};

RelAbsVector.prototype['setAbsoluteValue'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_RelAbsVector_setAbsoluteValue_1(self, arg0);
};

RelAbsVector.prototype['setRelativeValue'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_RelAbsVector_setRelativeValue_1(self, arg0);
};

RelAbsVector.prototype['getAbsoluteValue'] = function() {
  var self = this.ptr;
  return _emscripten_bind_RelAbsVector_getAbsoluteValue_0(self);
};

RelAbsVector.prototype['getRelativeValue'] = function() {
  var self = this.ptr;
  return _emscripten_bind_RelAbsVector_getRelativeValue_0(self);
};

  RelAbsVector.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_RelAbsVector___destroy___0(self);
}
// LocalParameter
function LocalParameter() { throw "cannot construct a LocalParameter, no constructor in IDL" }
LocalParameter.prototype = Object.create(WrapperObject.prototype);
LocalParameter.prototype.constructor = LocalParameter;
LocalParameter.prototype.__class__ = LocalParameter;
LocalParameter.__cache__ = {};
Module['LocalParameter'] = LocalParameter;

LocalParameter.prototype['getId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_LocalParameter_getId_0(self));
};

LocalParameter.prototype['setId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return idl_wrapBool(_emscripten_bind_LocalParameter_setId_1(self, arg0));
};

LocalParameter.prototype['getName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_LocalParameter_getName_0(self));
};

LocalParameter.prototype['setName'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_LocalParameter_setName_1(self, arg0);
};

LocalParameter.prototype['isSetName'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_LocalParameter_isSetName_0(self));
};

LocalParameter.prototype['getValue'] = function() {
  var self = this.ptr;
  return _emscripten_bind_LocalParameter_getValue_0(self);
};

LocalParameter.prototype['setValue'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_LocalParameter_setValue_1(self, arg0);
};

LocalParameter.prototype['isSetValue'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_LocalParameter_isSetValue_0(self));
};

LocalParameter.prototype['isSetUnits'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_LocalParameter_isSetUnits_0(self));
};

LocalParameter.prototype['getUnits'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_LocalParameter_getUnits_0(self));
};

LocalParameter.prototype['setUnits'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_LocalParameter_setUnits_1(self, arg0);
};

  LocalParameter.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_LocalParameter___destroy___0(self);
}
// SpeciesReference
function SpeciesReference() { throw "cannot construct a SpeciesReference, no constructor in IDL" }
SpeciesReference.prototype = Object.create(WrapperObject.prototype);
SpeciesReference.prototype.constructor = SpeciesReference;
SpeciesReference.prototype.__class__ = SpeciesReference;
SpeciesReference.__cache__ = {};
Module['SpeciesReference'] = SpeciesReference;

SpeciesReference.prototype['getId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_SpeciesReference_getId_0(self));
};

SpeciesReference.prototype['setId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return idl_wrapBool(_emscripten_bind_SpeciesReference_setId_1(self, arg0));
};

SpeciesReference.prototype['getMetaId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_SpeciesReference_getMetaId_0(self));
};

SpeciesReference.prototype['setMetaId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_SpeciesReference_setMetaId_1(self, arg0);
};

SpeciesReference.prototype['getSBOTerm'] = function() {
  var self = this.ptr;
  return _emscripten_bind_SpeciesReference_getSBOTerm_0(self);
};

SpeciesReference.prototype['setSBOTerm'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_SpeciesReference_setSBOTerm_1(self, arg0);
};

SpeciesReference.prototype['isSetSBOTerm'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_SpeciesReference_isSetSBOTerm_0(self));
};

SpeciesReference.prototype['getSpecies'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_SpeciesReference_getSpecies_0(self));
};

SpeciesReference.prototype['setSpecies'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_SpeciesReference_setSpecies_1(self, arg0);
};

SpeciesReference.prototype['getModel'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_SpeciesReference_getModel_0(self), Model);
};

  SpeciesReference.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_SpeciesReference___destroy___0(self);
}
// LayoutExtension
function LayoutExtension() { throw "cannot construct a LayoutExtension, no constructor in IDL" }
LayoutExtension.prototype = Object.create(WrapperObject.prototype);
LayoutExtension.prototype.constructor = LayoutExtension;
LayoutExtension.prototype.__class__ = LayoutExtension;
LayoutExtension.__cache__ = {};
Module['LayoutExtension'] = LayoutExtension;

  LayoutExtension.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_LayoutExtension___destroy___0(self);
}
// ReactionGlyph
function ReactionGlyph() { throw "cannot construct a ReactionGlyph, no constructor in IDL" }
ReactionGlyph.prototype = Object.create(WrapperObject.prototype);
ReactionGlyph.prototype.constructor = ReactionGlyph;
ReactionGlyph.prototype.__class__ = ReactionGlyph;
ReactionGlyph.__cache__ = {};
Module['ReactionGlyph'] = ReactionGlyph;

ReactionGlyph.prototype['getId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_ReactionGlyph_getId_0(self));
};

ReactionGlyph.prototype['setId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_ReactionGlyph_setId_1(self, arg0);
};

ReactionGlyph.prototype['isSetId'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_ReactionGlyph_isSetId_0(self));
};

ReactionGlyph.prototype['getReactionId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_ReactionGlyph_getReactionId_0(self));
};

ReactionGlyph.prototype['setReactionId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_ReactionGlyph_setReactionId_1(self, arg0);
};

ReactionGlyph.prototype['isSetReactionId'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_ReactionGlyph_isSetReactionId_0(self));
};

ReactionGlyph.prototype['getBoundingBox'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ReactionGlyph_getBoundingBox_0(self), BoundingBox);
};

ReactionGlyph.prototype['setBoundingBox'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_ReactionGlyph_setBoundingBox_1(self, arg0);
};

ReactionGlyph.prototype['getNumSpeciesReferenceGlyphs'] = function() {
  var self = this.ptr;
  return _emscripten_bind_ReactionGlyph_getNumSpeciesReferenceGlyphs_0(self);
};

ReactionGlyph.prototype['getSpeciesReferenceGlyph'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_ReactionGlyph_getSpeciesReferenceGlyph_1(self, arg0), SpeciesReferenceGlyph);
};

  ReactionGlyph.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_ReactionGlyph___destroy___0(self);
}
// GradientCaster
function GradientCaster() {
  this.ptr = _emscripten_bind_GradientCaster_GradientCaster_0();
  getCache(GradientCaster)[this.ptr] = this;
};
GradientCaster.prototype = Object.create(WrapperObject.prototype);
GradientCaster.prototype.constructor = GradientCaster;
GradientCaster.prototype.__class__ = GradientCaster;
GradientCaster.__cache__ = {};
Module['GradientCaster'] = GradientCaster;

GradientCaster.prototype['isLinear'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return idl_wrapBool(_emscripten_bind_GradientCaster_isLinear_1(self, arg0));
};

GradientCaster.prototype['asLinear'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_GradientCaster_asLinear_1(self, arg0), LinearGradient);
};

GradientCaster.prototype['isRadial'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return idl_wrapBool(_emscripten_bind_GradientCaster_isRadial_1(self, arg0));
};

GradientCaster.prototype['asRadial'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_GradientCaster_asRadial_1(self, arg0), RadialGradient);
};

  GradientCaster.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_GradientCaster___destroy___0(self);
}
// LineSegment
function LineSegment() { throw "cannot construct a LineSegment, no constructor in IDL" }
LineSegment.prototype = Object.create(WrapperObject.prototype);
LineSegment.prototype.constructor = LineSegment;
LineSegment.prototype.__class__ = LineSegment;
LineSegment.__cache__ = {};
Module['LineSegment'] = LineSegment;

LineSegment.prototype['getId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_LineSegment_getId_0(self));
};

LineSegment.prototype['setId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_LineSegment_setId_1(self, arg0);
};

LineSegment.prototype['isSetId'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_LineSegment_isSetId_0(self));
};

LineSegment.prototype['getStart'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_LineSegment_getStart_0(self), Point);
};

LineSegment.prototype['setStart'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_LineSegment_setStart_1(self, arg0);
};

LineSegment.prototype['getEnd'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_LineSegment_getEnd_0(self), Point);
};

LineSegment.prototype['setEnd'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_LineSegment_setEnd_1(self, arg0);
};

  LineSegment.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_LineSegment___destroy___0(self);
}
// BezierCaster
function BezierCaster() {
  this.ptr = _emscripten_bind_BezierCaster_BezierCaster_0();
  getCache(BezierCaster)[this.ptr] = this;
};
BezierCaster.prototype = Object.create(WrapperObject.prototype);
BezierCaster.prototype.constructor = BezierCaster;
BezierCaster.prototype.__class__ = BezierCaster;
BezierCaster.__cache__ = {};
Module['BezierCaster'] = BezierCaster;

BezierCaster.prototype['isBezier'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return idl_wrapBool(_emscripten_bind_BezierCaster_isBezier_1(self, arg0));
};

BezierCaster.prototype['asBezier'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_BezierCaster_asBezier_1(self, arg0), RenderCubicBezier);
};

  BezierCaster.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_BezierCaster___destroy___0(self);
}
// RuleSwitch
function RuleSwitch() {
  this.ptr = _emscripten_bind_RuleSwitch_RuleSwitch_0();
  getCache(RuleSwitch)[this.ptr] = this;
};
RuleSwitch.prototype = Object.create(WrapperObject.prototype);
RuleSwitch.prototype.constructor = RuleSwitch;
RuleSwitch.prototype.__class__ = RuleSwitch;
RuleSwitch.__cache__ = {};
Module['RuleSwitch'] = RuleSwitch;

RuleSwitch.prototype['castToAssignmentRule'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_RuleSwitch_castToAssignmentRule_1(self, arg0), AssignmentRule);
};

RuleSwitch.prototype['castToRateRule'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_RuleSwitch_castToRateRule_1(self, arg0), RateRule);
};

RuleSwitch.prototype['castToAlgebraicRule'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_RuleSwitch_castToAlgebraicRule_1(self, arg0), AlgebraicRule);
};

  RuleSwitch.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_RuleSwitch___destroy___0(self);
}
// LayoutExtensionWrapper
function LayoutExtensionWrapper() {
  this.ptr = _emscripten_bind_LayoutExtensionWrapper_LayoutExtensionWrapper_0();
  getCache(LayoutExtensionWrapper)[this.ptr] = this;
};
LayoutExtensionWrapper.prototype = Object.create(WrapperObject.prototype);
LayoutExtensionWrapper.prototype.constructor = LayoutExtensionWrapper;
LayoutExtensionWrapper.prototype.__class__ = LayoutExtensionWrapper;
LayoutExtensionWrapper.__cache__ = {};
Module['LayoutExtensionWrapper'] = LayoutExtensionWrapper;

LayoutExtensionWrapper.prototype['getXmlnsL2'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_LayoutExtensionWrapper_getXmlnsL2_0(self));
};

LayoutExtensionWrapper.prototype['getXmlnsL3V1V1'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_LayoutExtensionWrapper_getXmlnsL3V1V1_0(self));
};

  LayoutExtensionWrapper.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_LayoutExtensionWrapper___destroy___0(self);
}
// SBMLWriter
function SBMLWriter() {
  this.ptr = _emscripten_bind_SBMLWriter_SBMLWriter_0();
  getCache(SBMLWriter)[this.ptr] = this;
};
SBMLWriter.prototype = Object.create(WrapperObject.prototype);
SBMLWriter.prototype.constructor = SBMLWriter;
SBMLWriter.prototype.__class__ = SBMLWriter;
SBMLWriter.__cache__ = {};
Module['SBMLWriter'] = SBMLWriter;

SBMLWriter.prototype['writeSBMLToString'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return Pointer_stringify(_emscripten_bind_SBMLWriter_writeSBMLToString_1(self, arg0));
};

  SBMLWriter.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_SBMLWriter___destroy___0(self);
}
// Reaction
function Reaction() { throw "cannot construct a Reaction, no constructor in IDL" }
Reaction.prototype = Object.create(WrapperObject.prototype);
Reaction.prototype.constructor = Reaction;
Reaction.prototype.__class__ = Reaction;
Reaction.__cache__ = {};
Module['Reaction'] = Reaction;

Reaction.prototype['getId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Reaction_getId_0(self));
};

Reaction.prototype['setId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_Reaction_setId_1(self, arg0);
};

Reaction.prototype['getMetaId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Reaction_getMetaId_0(self));
};

Reaction.prototype['setMetaId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_Reaction_setMetaId_1(self, arg0);
};

Reaction.prototype['getName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Reaction_getName_0(self));
};

Reaction.prototype['setName'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_Reaction_setName_1(self, arg0);
};

Reaction.prototype['getNumReactants'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Reaction_getNumReactants_0(self);
};

Reaction.prototype['getNumProducts'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Reaction_getNumProducts_0(self);
};

Reaction.prototype['getNumModifiers'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Reaction_getNumModifiers_0(self);
};

Reaction.prototype['getReactant'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Reaction_getReactant_1(self, arg0), SpeciesReference);
};

Reaction.prototype['getProduct'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Reaction_getProduct_1(self, arg0), SpeciesReference);
};

Reaction.prototype['getModifier'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Reaction_getModifier_1(self, arg0), ModifierSpeciesReference);
};

Reaction.prototype['addReactant'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_Reaction_addReactant_1(self, arg0);
};

Reaction.prototype['addProduct'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_Reaction_addProduct_1(self, arg0);
};

Reaction.prototype['createReactant'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Reaction_createReactant_0(self), SpeciesReference);
};

Reaction.prototype['createProduct'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Reaction_createProduct_0(self), SpeciesReference);
};

Reaction.prototype['createModifier'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Reaction_createModifier_0(self), ModifierSpeciesReference);
};

Reaction.prototype['createKineticLaw'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Reaction_createKineticLaw_0(self), KineticLaw);
};

Reaction.prototype['getKineticLaw'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Reaction_getKineticLaw_0(self), KineticLaw);
};

Reaction.prototype['getReversible'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_Reaction_getReversible_0(self));
};

Reaction.prototype['setReversible'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_Reaction_setReversible_1(self, arg0);
};

Reaction.prototype['isSetReversible'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_Reaction_isSetReversible_0(self));
};

Reaction.prototype['getSBOTerm'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Reaction_getSBOTerm_0(self);
};

Reaction.prototype['setSBOTerm'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_Reaction_setSBOTerm_1(self, arg0);
};

Reaction.prototype['isSetSBOTerm'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_Reaction_isSetSBOTerm_0(self));
};

  Reaction.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_Reaction___destroy___0(self);
}
// SBMLError
function SBMLError() { throw "cannot construct a SBMLError, no constructor in IDL" }
SBMLError.prototype = Object.create(WrapperObject.prototype);
SBMLError.prototype.constructor = SBMLError;
SBMLError.prototype.__class__ = SBMLError;
SBMLError.__cache__ = {};
Module['SBMLError'] = SBMLError;

SBMLError.prototype['getMessage'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_SBMLError_getMessage_0(self));
};

  SBMLError.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_SBMLError___destroy___0(self);
}
// ModifierSpeciesReference
function ModifierSpeciesReference() { throw "cannot construct a ModifierSpeciesReference, no constructor in IDL" }
ModifierSpeciesReference.prototype = Object.create(WrapperObject.prototype);
ModifierSpeciesReference.prototype.constructor = ModifierSpeciesReference;
ModifierSpeciesReference.prototype.__class__ = ModifierSpeciesReference;
ModifierSpeciesReference.__cache__ = {};
Module['ModifierSpeciesReference'] = ModifierSpeciesReference;

ModifierSpeciesReference.prototype['getId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_ModifierSpeciesReference_getId_0(self));
};

ModifierSpeciesReference.prototype['setId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return idl_wrapBool(_emscripten_bind_ModifierSpeciesReference_setId_1(self, arg0));
};

ModifierSpeciesReference.prototype['getMetaId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_ModifierSpeciesReference_getMetaId_0(self));
};

ModifierSpeciesReference.prototype['setMetaId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_ModifierSpeciesReference_setMetaId_1(self, arg0);
};

ModifierSpeciesReference.prototype['getSBOTerm'] = function() {
  var self = this.ptr;
  return _emscripten_bind_ModifierSpeciesReference_getSBOTerm_0(self);
};

ModifierSpeciesReference.prototype['setSBOTerm'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_ModifierSpeciesReference_setSBOTerm_1(self, arg0);
};

ModifierSpeciesReference.prototype['isSetSBOTerm'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_ModifierSpeciesReference_isSetSBOTerm_0(self));
};

ModifierSpeciesReference.prototype['getSpecies'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_ModifierSpeciesReference_getSpecies_0(self));
};

ModifierSpeciesReference.prototype['setSpecies'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_ModifierSpeciesReference_setSpecies_1(self, arg0);
};

ModifierSpeciesReference.prototype['getModel'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ModifierSpeciesReference_getModel_0(self), Model);
};

  ModifierSpeciesReference.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_ModifierSpeciesReference___destroy___0(self);
}
// RenderLayoutPlugin
function RenderLayoutPlugin() { throw "cannot construct a RenderLayoutPlugin, no constructor in IDL" }
RenderLayoutPlugin.prototype = Object.create(WrapperObject.prototype);
RenderLayoutPlugin.prototype.constructor = RenderLayoutPlugin;
RenderLayoutPlugin.prototype.__class__ = RenderLayoutPlugin;
RenderLayoutPlugin.__cache__ = {};
Module['RenderLayoutPlugin'] = RenderLayoutPlugin;

RenderLayoutPlugin.prototype['getNumLocalRenderInformationObjects'] = function() {
  var self = this.ptr;
  return _emscripten_bind_RenderLayoutPlugin_getNumLocalRenderInformationObjects_0(self);
};

RenderLayoutPlugin.prototype['getRenderInformation'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_RenderLayoutPlugin_getRenderInformation_1(self, arg0), LocalRenderInformation);
};

RenderLayoutPlugin.prototype['createLocalRenderInformation'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_RenderLayoutPlugin_createLocalRenderInformation_0(self), LocalRenderInformation);
};

RenderLayoutPlugin.prototype['removeLocalRenderInformation'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_RenderLayoutPlugin_removeLocalRenderInformation_1(self, arg0), LocalRenderInformation);
};

  RenderLayoutPlugin.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_RenderLayoutPlugin___destroy___0(self);
}
// Curve
function Curve() { throw "cannot construct a Curve, no constructor in IDL" }
Curve.prototype = Object.create(WrapperObject.prototype);
Curve.prototype.constructor = Curve;
Curve.prototype.__class__ = Curve;
Curve.__cache__ = {};
Module['Curve'] = Curve;

Curve.prototype['createCubicBezier'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Curve_createCubicBezier_0(self), CubicBezier);
};

Curve.prototype['createLineSegment'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Curve_createLineSegment_0(self), LineSegment);
};

Curve.prototype['getNumCurveSegments'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Curve_getNumCurveSegments_0(self);
};

Curve.prototype['getCurveSegment'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Curve_getCurveSegment_1(self, arg0), LineSegment);
};

  Curve.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_Curve___destroy___0(self);
}
// GlobalRenderInformation
function GlobalRenderInformation() { throw "cannot construct a GlobalRenderInformation, no constructor in IDL" }
GlobalRenderInformation.prototype = Object.create(WrapperObject.prototype);
GlobalRenderInformation.prototype.constructor = GlobalRenderInformation;
GlobalRenderInformation.prototype.__class__ = GlobalRenderInformation;
GlobalRenderInformation.__cache__ = {};
Module['GlobalRenderInformation'] = GlobalRenderInformation;

GlobalRenderInformation.prototype['getId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_GlobalRenderInformation_getId_0(self));
};

GlobalRenderInformation.prototype['setId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_GlobalRenderInformation_setId_1(self, arg0);
};

GlobalRenderInformation.prototype['isSetId'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_GlobalRenderInformation_isSetId_0(self));
};

GlobalRenderInformation.prototype['getName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_GlobalRenderInformation_getName_0(self));
};

GlobalRenderInformation.prototype['setName'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_GlobalRenderInformation_setName_1(self, arg0);
};

GlobalRenderInformation.prototype['isSetName'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_GlobalRenderInformation_isSetName_0(self));
};

GlobalRenderInformation.prototype['getProgramName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_GlobalRenderInformation_getProgramName_0(self));
};

GlobalRenderInformation.prototype['setProgramName'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_GlobalRenderInformation_setProgramName_1(self, arg0);
};

GlobalRenderInformation.prototype['getProgramVersion'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_GlobalRenderInformation_getProgramVersion_0(self));
};

GlobalRenderInformation.prototype['setProgramVersion'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_GlobalRenderInformation_setProgramVersion_1(self, arg0);
};

GlobalRenderInformation.prototype['getBackgroundColor'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_GlobalRenderInformation_getBackgroundColor_0(self));
};

GlobalRenderInformation.prototype['setBackgroundColor'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_GlobalRenderInformation_setBackgroundColor_1(self, arg0);
};

GlobalRenderInformation.prototype['getNumColorDefinitions'] = function() {
  var self = this.ptr;
  return _emscripten_bind_GlobalRenderInformation_getNumColorDefinitions_0(self);
};

GlobalRenderInformation.prototype['getColorDefinition'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_GlobalRenderInformation_getColorDefinition_1(self, arg0), ColorDefinition);
};

GlobalRenderInformation.prototype['createColorDefinition'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_GlobalRenderInformation_createColorDefinition_0(self), ColorDefinition);
};

GlobalRenderInformation.prototype['removeColorDefinition'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_GlobalRenderInformation_removeColorDefinition_1(self, arg0), ColorDefinition);
};

GlobalRenderInformation.prototype['getNumGradientDefinitions'] = function() {
  var self = this.ptr;
  return _emscripten_bind_GlobalRenderInformation_getNumGradientDefinitions_0(self);
};

GlobalRenderInformation.prototype['getGradientDefinition'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_GlobalRenderInformation_getGradientDefinition_1(self, arg0), GradientBase);
};

GlobalRenderInformation.prototype['createLinearGradientDefinition'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_GlobalRenderInformation_createLinearGradientDefinition_0(self), LinearGradient);
};

GlobalRenderInformation.prototype['createRadialGradientDefinition'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_GlobalRenderInformation_createRadialGradientDefinition_0(self), RadialGradient);
};

GlobalRenderInformation.prototype['removeGradientDefinition'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_GlobalRenderInformation_removeGradientDefinition_1(self, arg0), GradientBase);
};

GlobalRenderInformation.prototype['getNumLineEndings'] = function() {
  var self = this.ptr;
  return _emscripten_bind_GlobalRenderInformation_getNumLineEndings_0(self);
};

GlobalRenderInformation.prototype['getLineEnding'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_GlobalRenderInformation_getLineEnding_1(self, arg0), LineEnding);
};

GlobalRenderInformation.prototype['createLineEnding'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_GlobalRenderInformation_createLineEnding_0(self), LineEnding);
};

GlobalRenderInformation.prototype['removeLineEnding'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_GlobalRenderInformation_removeLineEnding_1(self, arg0), LineEnding);
};

GlobalRenderInformation.prototype['getNumStyles'] = function() {
  var self = this.ptr;
  return _emscripten_bind_GlobalRenderInformation_getNumStyles_0(self);
};

GlobalRenderInformation.prototype['getStyle'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_GlobalRenderInformation_getStyle_1(self, arg0), GlobalStyle);
};

GlobalRenderInformation.prototype['createStyle'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_GlobalRenderInformation_createStyle_1(self, arg0), GlobalStyle);
};

  GlobalRenderInformation.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_GlobalRenderInformation___destroy___0(self);
}
// Rule
function Rule() { throw "cannot construct a Rule, no constructor in IDL" }
Rule.prototype = Object.create(WrapperObject.prototype);
Rule.prototype.constructor = Rule;
Rule.prototype.__class__ = Rule;
Rule.__cache__ = {};
Module['Rule'] = Rule;

Rule.prototype['isRate'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_Rule_isRate_0(self));
};

Rule.prototype['isAssignment'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_Rule_isAssignment_0(self));
};

Rule.prototype['isAlgebraic'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_Rule_isAlgebraic_0(self));
};

Rule.prototype['getMetaId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Rule_getMetaId_0(self));
};

Rule.prototype['setMetaId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_Rule_setMetaId_1(self, arg0);
};

Rule.prototype['isSetMetaId'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_Rule_isSetMetaId_0(self));
};

Rule.prototype['getSBOTerm'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Rule_getSBOTerm_0(self);
};

Rule.prototype['setSBOTerm'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_Rule_setSBOTerm_1(self, arg0);
};

Rule.prototype['isSetSBOTerm'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_Rule_isSetSBOTerm_0(self));
};

Rule.prototype['getFormula'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Rule_getFormula_0(self));
};

Rule.prototype['setFormula'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_Rule_setFormula_1(self, arg0);
};

Rule.prototype['isParameter'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_Rule_isParameter_0(self));
};

  Rule.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_Rule___destroy___0(self);
}
// ListOfLayouts
function ListOfLayouts() { throw "cannot construct a ListOfLayouts, no constructor in IDL" }
ListOfLayouts.prototype = Object.create(WrapperObject.prototype);
ListOfLayouts.prototype.constructor = ListOfLayouts;
ListOfLayouts.prototype.__class__ = ListOfLayouts;
ListOfLayouts.__cache__ = {};
Module['ListOfLayouts'] = ListOfLayouts;

ListOfLayouts.prototype['getPlugin'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_ListOfLayouts_getPlugin_1(self, arg0), SBasePlugin);
};

  ListOfLayouts.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_ListOfLayouts___destroy___0(self);
}
// PrimitiveCaster
function PrimitiveCaster() {
  this.ptr = _emscripten_bind_PrimitiveCaster_PrimitiveCaster_0();
  getCache(PrimitiveCaster)[this.ptr] = this;
};
PrimitiveCaster.prototype = Object.create(WrapperObject.prototype);
PrimitiveCaster.prototype.constructor = PrimitiveCaster;
PrimitiveCaster.prototype.__class__ = PrimitiveCaster;
PrimitiveCaster.__cache__ = {};
Module['PrimitiveCaster'] = PrimitiveCaster;

PrimitiveCaster.prototype['isPolygon'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return idl_wrapBool(_emscripten_bind_PrimitiveCaster_isPolygon_1(self, arg0));
};

PrimitiveCaster.prototype['asPolygon'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_PrimitiveCaster_asPolygon_1(self, arg0), Polygon);
};

PrimitiveCaster.prototype['isImage'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return idl_wrapBool(_emscripten_bind_PrimitiveCaster_isImage_1(self, arg0));
};

PrimitiveCaster.prototype['asImage'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_PrimitiveCaster_asImage_1(self, arg0), Image);
};

PrimitiveCaster.prototype['isRectangle'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return idl_wrapBool(_emscripten_bind_PrimitiveCaster_isRectangle_1(self, arg0));
};

PrimitiveCaster.prototype['asRectangle'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_PrimitiveCaster_asRectangle_1(self, arg0), Rectangle);
};

PrimitiveCaster.prototype['isEllipse'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return idl_wrapBool(_emscripten_bind_PrimitiveCaster_isEllipse_1(self, arg0));
};

PrimitiveCaster.prototype['asEllipse'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_PrimitiveCaster_asEllipse_1(self, arg0), Ellipse);
};

PrimitiveCaster.prototype['isRenderCurve'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return idl_wrapBool(_emscripten_bind_PrimitiveCaster_isRenderCurve_1(self, arg0));
};

PrimitiveCaster.prototype['asRenderCurve'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_PrimitiveCaster_asRenderCurve_1(self, arg0), RenderCurve);
};

PrimitiveCaster.prototype['isText'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return idl_wrapBool(_emscripten_bind_PrimitiveCaster_isText_1(self, arg0));
};

PrimitiveCaster.prototype['asText'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_PrimitiveCaster_asText_1(self, arg0), Text);
};

  PrimitiveCaster.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_PrimitiveCaster___destroy___0(self);
}
// LocalStyle
function LocalStyle() { throw "cannot construct a LocalStyle, no constructor in IDL" }
LocalStyle.prototype = Object.create(WrapperObject.prototype);
LocalStyle.prototype.constructor = LocalStyle;
LocalStyle.prototype.__class__ = LocalStyle;
LocalStyle.__cache__ = {};
Module['LocalStyle'] = LocalStyle;

LocalStyle.prototype['getId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_LocalStyle_getId_0(self));
};

LocalStyle.prototype['setId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_LocalStyle_setId_1(self, arg0);
};

LocalStyle.prototype['isSetId'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_LocalStyle_isSetId_0(self));
};

LocalStyle.prototype['getName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_LocalStyle_getName_0(self));
};

LocalStyle.prototype['setName'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_LocalStyle_setName_1(self, arg0);
};

LocalStyle.prototype['getNumIds'] = function() {
  var self = this.ptr;
  return _emscripten_bind_LocalStyle_getNumIds_0(self);
};

LocalStyle.prototype['isInIdList'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return idl_wrapBool(_emscripten_bind_LocalStyle_isInIdList_1(self, arg0));
};

LocalStyle.prototype['removeId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_LocalStyle_removeId_1(self, arg0);
};

LocalStyle.prototype['getGroup'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_LocalStyle_getGroup_0(self), RenderGroup);
};

LocalStyle.prototype['setGroup'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_LocalStyle_setGroup_1(self, arg0);
};

LocalStyle.prototype['getNumRoles'] = function() {
  var self = this.ptr;
  return _emscripten_bind_LocalStyle_getNumRoles_0(self);
};

LocalStyle.prototype['createRoleString'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_LocalStyle_createRoleString_0(self));
};

LocalStyle.prototype['createTypeString'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_LocalStyle_createTypeString_0(self));
};

LocalStyle.prototype['addRole'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_LocalStyle_addRole_1(self, arg0);
};

LocalStyle.prototype['isInRoleList'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return idl_wrapBool(_emscripten_bind_LocalStyle_isInRoleList_1(self, arg0));
};

LocalStyle.prototype['removeRole'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_LocalStyle_removeRole_1(self, arg0);
};

LocalStyle.prototype['getNumTypes'] = function() {
  var self = this.ptr;
  return _emscripten_bind_LocalStyle_getNumTypes_0(self);
};

LocalStyle.prototype['addType'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_LocalStyle_addType_1(self, arg0);
};

LocalStyle.prototype['isInTypeList'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_LocalStyle_isInTypeList_1(self, arg0);
};

LocalStyle.prototype['removeType'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_LocalStyle_removeType_1(self, arg0);
};

  LocalStyle.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_LocalStyle___destroy___0(self);
}
// SBasePlugin
function SBasePlugin() { throw "cannot construct a SBasePlugin, no constructor in IDL" }
SBasePlugin.prototype = Object.create(WrapperObject.prototype);
SBasePlugin.prototype.constructor = SBasePlugin;
SBasePlugin.prototype.__class__ = SBasePlugin;
SBasePlugin.__cache__ = {};
Module['SBasePlugin'] = SBasePlugin;

SBasePlugin.prototype['getPackageName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_SBasePlugin_getPackageName_0(self));
};

SBasePlugin.prototype['getPrefix'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_SBasePlugin_getPrefix_0(self));
};

SBasePlugin.prototype['getURI'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_SBasePlugin_getURI_0(self));
};

SBasePlugin.prototype['getVersion'] = function() {
  var self = this.ptr;
  return _emscripten_bind_SBasePlugin_getVersion_0(self);
};

SBasePlugin.prototype['getLevel'] = function() {
  var self = this.ptr;
  return _emscripten_bind_SBasePlugin_getLevel_0(self);
};

  SBasePlugin.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_SBasePlugin___destroy___0(self);
}
// SBMLDocument
function SBMLDocument(arg0, arg1) {
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  this.ptr = _emscripten_bind_SBMLDocument_SBMLDocument_2(arg0, arg1);
  getCache(SBMLDocument)[this.ptr] = this;
};
SBMLDocument.prototype = Object.create(WrapperObject.prototype);
SBMLDocument.prototype.constructor = SBMLDocument;
SBMLDocument.prototype.__class__ = SBMLDocument;
SBMLDocument.__cache__ = {};
Module['SBMLDocument'] = SBMLDocument;

SBMLDocument.prototype['getModel'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_SBMLDocument_getModel_0(self), Model);
};

SBMLDocument.prototype['createModel'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_SBMLDocument_createModel_0(self), Model);
};

SBMLDocument.prototype['getNumErrors'] = function() {
  var self = this.ptr;
  return _emscripten_bind_SBMLDocument_getNumErrors_0(self);
};

SBMLDocument.prototype['getError'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_SBMLDocument_getError_1(self, arg0), SBMLError);
};

SBMLDocument.prototype['getErrorLog'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_SBMLDocument_getErrorLog_0(self), SBMLErrorLog);
};

SBMLDocument.prototype['getVersion'] = function() {
  var self = this.ptr;
  return _emscripten_bind_SBMLDocument_getVersion_0(self);
};

SBMLDocument.prototype['getLevel'] = function() {
  var self = this.ptr;
  return _emscripten_bind_SBMLDocument_getLevel_0(self);
};

SBMLDocument.prototype['getNumPlugins'] = function() {
  var self = this.ptr;
  return _emscripten_bind_SBMLDocument_getNumPlugins_0(self);
};

SBMLDocument.prototype['getPlugin'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_SBMLDocument_getPlugin_1(self, arg0), SBasePlugin);
};

SBMLDocument.prototype['enablePackage'] = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  return idl_wrapBool(_emscripten_bind_SBMLDocument_enablePackage_3(self, arg0, arg1, arg2));
};

SBMLDocument.prototype['disablePackage'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  return idl_wrapBool(_emscripten_bind_SBMLDocument_disablePackage_2(self, arg0, arg1));
};

SBMLDocument.prototype['isPackageEnabled'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return idl_wrapBool(_emscripten_bind_SBMLDocument_isPackageEnabled_1(self, arg0));
};

SBMLDocument.prototype['setPackageRequired'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  return _emscripten_bind_SBMLDocument_setPackageRequired_2(self, arg0, arg1);
};

SBMLDocument.prototype['checkConsistency'] = function() {
  var self = this.ptr;
  return _emscripten_bind_SBMLDocument_checkConsistency_0(self);
};

SBMLDocument.prototype['checkInternalConsistency'] = function() {
  var self = this.ptr;
  return _emscripten_bind_SBMLDocument_checkInternalConsistency_0(self);
};

SBMLDocument.prototype['validateSBML'] = function() {
  var self = this.ptr;
  return _emscripten_bind_SBMLDocument_validateSBML_0(self);
};

SBMLDocument.prototype['checkL1Compatibility'] = function() {
  var self = this.ptr;
  return _emscripten_bind_SBMLDocument_checkL1Compatibility_0(self);
};

SBMLDocument.prototype['checkL2v1Compatibility'] = function() {
  var self = this.ptr;
  return _emscripten_bind_SBMLDocument_checkL2v1Compatibility_0(self);
};

SBMLDocument.prototype['checkL2v2Compatibility'] = function() {
  var self = this.ptr;
  return _emscripten_bind_SBMLDocument_checkL2v2Compatibility_0(self);
};

SBMLDocument.prototype['checkL2v3Compatibility'] = function() {
  var self = this.ptr;
  return _emscripten_bind_SBMLDocument_checkL2v3Compatibility_0(self);
};

SBMLDocument.prototype['checkL2v4Compatibility'] = function() {
  var self = this.ptr;
  return _emscripten_bind_SBMLDocument_checkL2v4Compatibility_0(self);
};

SBMLDocument.prototype['checkL3v1Compatibility'] = function() {
  var self = this.ptr;
  return _emscripten_bind_SBMLDocument_checkL3v1Compatibility_0(self);
};

  SBMLDocument.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_SBMLDocument___destroy___0(self);
}
// Polygon
function Polygon() { throw "cannot construct a Polygon, no constructor in IDL" }
Polygon.prototype = Object.create(WrapperObject.prototype);
Polygon.prototype.constructor = Polygon;
Polygon.prototype.__class__ = Polygon;
Polygon.__cache__ = {};
Module['Polygon'] = Polygon;

Polygon.prototype['getNumElements'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Polygon_getNumElements_0(self);
};

Polygon.prototype['getElement'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Polygon_getElement_1(self, arg0), RenderPoint);
};

Polygon.prototype['createPoint'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Polygon_createPoint_0(self), RenderPoint);
};

Polygon.prototype['createCubicBezier'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Polygon_createCubicBezier_0(self), RenderCubicBezier);
};

Polygon.prototype['getElementName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Polygon_getElementName_0(self));
};

Polygon.prototype['getTypeCode'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Polygon_getTypeCode_0(self);
};

  Polygon.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_Polygon___destroy___0(self);
}
// GradientStop
function GradientStop() { throw "cannot construct a GradientStop, no constructor in IDL" }
GradientStop.prototype = Object.create(WrapperObject.prototype);
GradientStop.prototype.constructor = GradientStop;
GradientStop.prototype.__class__ = GradientStop;
GradientStop.__cache__ = {};
Module['GradientStop'] = GradientStop;

GradientStop.prototype['getId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_GradientStop_getId_0(self));
};

GradientStop.prototype['setId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_GradientStop_setId_1(self, arg0);
};

GradientStop.prototype['isSetId'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_GradientStop_isSetId_0(self));
};

GradientStop.prototype['getOffset'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_GradientStop_getOffset_0(self), RelAbsVector);
};

GradientStop.prototype['setOffset'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_GradientStop_setOffset_2(self, arg0, arg1);
};

GradientStop.prototype['getStopColor'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_GradientStop_getStopColor_0(self));
};

GradientStop.prototype['setStopColor'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_GradientStop_setStopColor_1(self, arg0);
};

  GradientStop.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_GradientStop___destroy___0(self);
}
// Model
function Model() { throw "cannot construct a Model, no constructor in IDL" }
Model.prototype = Object.create(WrapperObject.prototype);
Model.prototype.constructor = Model;
Model.prototype.__class__ = Model;
Model.__cache__ = {};
Module['Model'] = Model;

Model.prototype['getId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Model_getId_0(self));
};

Model.prototype['setId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_Model_setId_1(self, arg0);
};

Model.prototype['getMetaId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Model_getMetaId_0(self));
};

Model.prototype['setMetaId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_Model_setMetaId_1(self, arg0);
};

Model.prototype['isSetMetaId'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_Model_isSetMetaId_0(self));
};

Model.prototype['getNumReactions'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Model_getNumReactions_0(self);
};

Model.prototype['getReaction'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Model_getReaction_1(self, arg0), Reaction);
};

Model.prototype['createReaction'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Model_createReaction_0(self), Reaction);
};

Model.prototype['getNumSpecies'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Model_getNumSpecies_0(self);
};

Model.prototype['createSpecies'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Model_createSpecies_0(self), Species);
};

Model.prototype['getSpecies'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Model_getSpecies_1(self, arg0), Species);
};

Model.prototype['removeSpecies'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Model_removeSpecies_1(self, arg0), Species);
};

Model.prototype['getNumCompartments'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Model_getNumCompartments_0(self);
};

Model.prototype['getCompartment'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Model_getCompartment_1(self, arg0), Compartment);
};

Model.prototype['createCompartment'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Model_createCompartment_0(self), Compartment);
};

Model.prototype['getNumParameters'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Model_getNumParameters_0(self);
};

Model.prototype['createParameter'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Model_createParameter_0(self), Parameter);
};

Model.prototype['getParameter'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Model_getParameter_1(self, arg0), Parameter);
};

Model.prototype['getNumRules'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Model_getNumRules_0(self);
};

Model.prototype['getRule'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Model_getRule_1(self, arg0), Rule);
};

Model.prototype['getVersion'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Model_getVersion_0(self);
};

Model.prototype['setAnnotation'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_Model_setAnnotation_1(self, arg0);
};

Model.prototype['getNumPlugins'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Model_getNumPlugins_0(self);
};

Model.prototype['getPlugin'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_Model_getPlugin_1(self, arg0), SBasePlugin);
};

Model.prototype['getNotesString'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Model_getNotesString_0(self));
};

  Model.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_Model___destroy___0(self);
}
// RenderGroup
function RenderGroup() { throw "cannot construct a RenderGroup, no constructor in IDL" }
RenderGroup.prototype = Object.create(WrapperObject.prototype);
RenderGroup.prototype.constructor = RenderGroup;
RenderGroup.prototype.__class__ = RenderGroup;
RenderGroup.__cache__ = {};
Module['RenderGroup'] = RenderGroup;

RenderGroup.prototype['getId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_RenderGroup_getId_0(self));
};

RenderGroup.prototype['setId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_RenderGroup_setId_1(self, arg0);
};

RenderGroup.prototype['isSetId'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_RenderGroup_isSetId_0(self));
};

RenderGroup.prototype['getFontFamily'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_RenderGroup_getFontFamily_0(self));
};

RenderGroup.prototype['setFontFamily'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_RenderGroup_setFontFamily_1(self, arg0);
};

RenderGroup.prototype['getFontSize'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_RenderGroup_getFontSize_0(self), RelAbsVector);
};

RenderGroup.prototype['setFontSize'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_RenderGroup_setFontSize_1(self, arg0);
};

RenderGroup.prototype['getFontWeight'] = function() {
  var self = this.ptr;
  return _emscripten_bind_RenderGroup_getFontWeight_0(self);
};

RenderGroup.prototype['setFontWeight'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_RenderGroup_setFontWeight_1(self, arg0);
};

RenderGroup.prototype['getFontStyle'] = function() {
  var self = this.ptr;
  return _emscripten_bind_RenderGroup_getFontStyle_0(self);
};

RenderGroup.prototype['setFontStyle'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_RenderGroup_setFontStyle_1(self, arg0);
};

RenderGroup.prototype['getTextAnchor'] = function() {
  var self = this.ptr;
  return _emscripten_bind_RenderGroup_getTextAnchor_0(self);
};

RenderGroup.prototype['getVTextAnchor'] = function() {
  var self = this.ptr;
  return _emscripten_bind_RenderGroup_getVTextAnchor_0(self);
};

RenderGroup.prototype['setTextAnchor'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_RenderGroup_setTextAnchor_1(self, arg0);
};

RenderGroup.prototype['setVTextAnchor'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_RenderGroup_setVTextAnchor_1(self, arg0);
};

RenderGroup.prototype['isSetTextAnchor'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_RenderGroup_isSetTextAnchor_0(self));
};

RenderGroup.prototype['isSetVTextAnchor'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_RenderGroup_isSetVTextAnchor_0(self));
};

RenderGroup.prototype['getStartHead'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_RenderGroup_getStartHead_0(self));
};

RenderGroup.prototype['getEndHead'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_RenderGroup_getEndHead_0(self));
};

RenderGroup.prototype['getNumElements'] = function() {
  var self = this.ptr;
  return _emscripten_bind_RenderGroup_getNumElements_0(self);
};

RenderGroup.prototype['getElement'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_RenderGroup_getElement_1(self, arg0), Transformation2D);
};

RenderGroup.prototype['getElementName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_RenderGroup_getElementName_0(self));
};

RenderGroup.prototype['createImage'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_RenderGroup_createImage_0(self), Image);
};

RenderGroup.prototype['createGroup'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_RenderGroup_createGroup_0(self), RenderGroup);
};

RenderGroup.prototype['createRectangle'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_RenderGroup_createRectangle_0(self), Rectangle);
};

RenderGroup.prototype['createEllipse'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_RenderGroup_createEllipse_0(self), Ellipse);
};

RenderGroup.prototype['createCurve'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_RenderGroup_createCurve_0(self), RenderCurve);
};

RenderGroup.prototype['createPolygon'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_RenderGroup_createPolygon_0(self), Polygon);
};

RenderGroup.prototype['createText'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_RenderGroup_createText_0(self), Text);
};

RenderGroup.prototype['addChildElement'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_RenderGroup_addChildElement_1(self, arg0);
};

RenderGroup.prototype['isSetStartHead'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_RenderGroup_isSetStartHead_0(self));
};

RenderGroup.prototype['isSetEndHead'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_RenderGroup_isSetEndHead_0(self));
};

RenderGroup.prototype['isSetFontFamily'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_RenderGroup_isSetFontFamily_0(self));
};

RenderGroup.prototype['isSetFontWeight'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_RenderGroup_isSetFontWeight_0(self));
};

RenderGroup.prototype['isSetFontStyle'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_RenderGroup_isSetFontStyle_0(self));
};

RenderGroup.prototype['getTypeCode'] = function() {
  var self = this.ptr;
  return _emscripten_bind_RenderGroup_getTypeCode_0(self);
};

RenderGroup.prototype['setFillColor'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_RenderGroup_setFillColor_1(self, arg0);
};

RenderGroup.prototype['getFillColor'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_RenderGroup_getFillColor_0(self));
};

RenderGroup.prototype['isSetFillColor'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_RenderGroup_isSetFillColor_0(self));
};

RenderGroup.prototype['isSetFillRule'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_RenderGroup_isSetFillRule_0(self));
};

RenderGroup.prototype['setStroke'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_RenderGroup_setStroke_1(self, arg0);
};

RenderGroup.prototype['getStroke'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_RenderGroup_getStroke_0(self));
};

RenderGroup.prototype['isSetStroke'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_RenderGroup_isSetStroke_0(self));
};

RenderGroup.prototype['setStrokeWidth'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_RenderGroup_setStrokeWidth_1(self, arg0);
};

RenderGroup.prototype['getStrokeWidth'] = function() {
  var self = this.ptr;
  return _emscripten_bind_RenderGroup_getStrokeWidth_0(self);
};

RenderGroup.prototype['isSetStrokeWidth'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_RenderGroup_isSetStrokeWidth_0(self));
};

RenderGroup.prototype['isSetDashArray'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_RenderGroup_isSetDashArray_0(self));
};

RenderGroup.prototype['getNumDashes'] = function() {
  var self = this.ptr;
  return _emscripten_bind_RenderGroup_getNumDashes_0(self);
};

RenderGroup.prototype['getDashByIndex'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_RenderGroup_getDashByIndex_1(self, arg0);
};

RenderGroup.prototype['addDash'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_RenderGroup_addDash_1(self, arg0);
};

RenderGroup.prototype['clearDashes'] = function() {
  var self = this.ptr;
  _emscripten_bind_RenderGroup_clearDashes_0(self);
};

RenderGroup.prototype['setDashByIndex'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_RenderGroup_setDashByIndex_2(self, arg0, arg1);
};

RenderGroup.prototype['insertDash'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_RenderGroup_insertDash_2(self, arg0, arg1);
};

RenderGroup.prototype['removeDash'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_RenderGroup_removeDash_1(self, arg0);
};

  RenderGroup.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_RenderGroup___destroy___0(self);
}
// AlgebraicRule
function AlgebraicRule() { throw "cannot construct a AlgebraicRule, no constructor in IDL" }
AlgebraicRule.prototype = Object.create(WrapperObject.prototype);
AlgebraicRule.prototype.constructor = AlgebraicRule;
AlgebraicRule.prototype.__class__ = AlgebraicRule;
AlgebraicRule.__cache__ = {};
Module['AlgebraicRule'] = AlgebraicRule;

AlgebraicRule.prototype['getMetaId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_AlgebraicRule_getMetaId_0(self));
};

AlgebraicRule.prototype['setMetaId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_AlgebraicRule_setMetaId_1(self, arg0);
};

AlgebraicRule.prototype['isSetMetaId'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_AlgebraicRule_isSetMetaId_0(self));
};

AlgebraicRule.prototype['getSBOTerm'] = function() {
  var self = this.ptr;
  return _emscripten_bind_AlgebraicRule_getSBOTerm_0(self);
};

AlgebraicRule.prototype['setSBOTerm'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_AlgebraicRule_setSBOTerm_1(self, arg0);
};

AlgebraicRule.prototype['isSetSBOTerm'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_AlgebraicRule_isSetSBOTerm_0(self));
};

AlgebraicRule.prototype['getFormula'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_AlgebraicRule_getFormula_0(self));
};

AlgebraicRule.prototype['setFormula'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_AlgebraicRule_setFormula_1(self, arg0);
};

AlgebraicRule.prototype['getMath'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_AlgebraicRule_getMath_0(self), ASTNode);
};

AlgebraicRule.prototype['setMath'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_AlgebraicRule_setMath_1(self, arg0);
};

AlgebraicRule.prototype['isSetMath'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_AlgebraicRule_isSetMath_0(self));
};

AlgebraicRule.prototype['isParameter'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_AlgebraicRule_isParameter_0(self));
};

  AlgebraicRule.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_AlgebraicRule___destroy___0(self);
}
// RenderExtension
function RenderExtension() { throw "cannot construct a RenderExtension, no constructor in IDL" }
RenderExtension.prototype = Object.create(WrapperObject.prototype);
RenderExtension.prototype.constructor = RenderExtension;
RenderExtension.prototype.__class__ = RenderExtension;
RenderExtension.__cache__ = {};
Module['RenderExtension'] = RenderExtension;

  RenderExtension.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_RenderExtension___destroy___0(self);
}
// RenderListOfLayoutsPlugin
function RenderListOfLayoutsPlugin() { throw "cannot construct a RenderListOfLayoutsPlugin, no constructor in IDL" }
RenderListOfLayoutsPlugin.prototype = Object.create(WrapperObject.prototype);
RenderListOfLayoutsPlugin.prototype.constructor = RenderListOfLayoutsPlugin;
RenderListOfLayoutsPlugin.prototype.__class__ = RenderListOfLayoutsPlugin;
RenderListOfLayoutsPlugin.__cache__ = {};
Module['RenderListOfLayoutsPlugin'] = RenderListOfLayoutsPlugin;

RenderListOfLayoutsPlugin.prototype['getNumGlobalRenderInformationObjects'] = function() {
  var self = this.ptr;
  return _emscripten_bind_RenderListOfLayoutsPlugin_getNumGlobalRenderInformationObjects_0(self);
};

RenderListOfLayoutsPlugin.prototype['getRenderInformation'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_RenderListOfLayoutsPlugin_getRenderInformation_1(self, arg0), GlobalRenderInformation);
};

  RenderListOfLayoutsPlugin.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_RenderListOfLayoutsPlugin___destroy___0(self);
}
// RenderCurve
function RenderCurve() { throw "cannot construct a RenderCurve, no constructor in IDL" }
RenderCurve.prototype = Object.create(WrapperObject.prototype);
RenderCurve.prototype.constructor = RenderCurve;
RenderCurve.prototype.__class__ = RenderCurve;
RenderCurve.__cache__ = {};
Module['RenderCurve'] = RenderCurve;

RenderCurve.prototype['getStartHead'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_RenderCurve_getStartHead_0(self));
};

RenderCurve.prototype['getEndHead'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_RenderCurve_getEndHead_0(self));
};

RenderCurve.prototype['isSetStartHead'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_RenderCurve_isSetStartHead_0(self));
};

RenderCurve.prototype['isSetEndHead'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_RenderCurve_isSetEndHead_0(self));
};

RenderCurve.prototype['getNumElements'] = function() {
  var self = this.ptr;
  return _emscripten_bind_RenderCurve_getNumElements_0(self);
};

RenderCurve.prototype['getElement'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_RenderCurve_getElement_1(self, arg0), RenderPoint);
};

RenderCurve.prototype['removeElement'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_RenderCurve_removeElement_1(self, arg0), RenderPoint);
};

RenderCurve.prototype['createCubicBezier'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_RenderCurve_createCubicBezier_0(self), RenderCubicBezier);
};

RenderCurve.prototype['createPoint'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_RenderCurve_createPoint_0(self), RenderPoint);
};

  RenderCurve.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_RenderCurve___destroy___0(self);
}
// SBMLReader
function SBMLReader() {
  this.ptr = _emscripten_bind_SBMLReader_SBMLReader_0();
  getCache(SBMLReader)[this.ptr] = this;
};
SBMLReader.prototype = Object.create(WrapperObject.prototype);
SBMLReader.prototype.constructor = SBMLReader;
SBMLReader.prototype.__class__ = SBMLReader;
SBMLReader.__cache__ = {};
Module['SBMLReader'] = SBMLReader;

SBMLReader.prototype['readSBMLFromString'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_SBMLReader_readSBMLFromString_1(self, arg0), SBMLDocument);
};

  SBMLReader.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_SBMLReader___destroy___0(self);
}
// SpeciesReferenceGlyph
function SpeciesReferenceGlyph() { throw "cannot construct a SpeciesReferenceGlyph, no constructor in IDL" }
SpeciesReferenceGlyph.prototype = Object.create(WrapperObject.prototype);
SpeciesReferenceGlyph.prototype.constructor = SpeciesReferenceGlyph;
SpeciesReferenceGlyph.prototype.__class__ = SpeciesReferenceGlyph;
SpeciesReferenceGlyph.__cache__ = {};
Module['SpeciesReferenceGlyph'] = SpeciesReferenceGlyph;

SpeciesReferenceGlyph.prototype['getId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_SpeciesReferenceGlyph_getId_0(self));
};

SpeciesReferenceGlyph.prototype['setId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_SpeciesReferenceGlyph_setId_1(self, arg0);
};

SpeciesReferenceGlyph.prototype['isSetId'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_SpeciesReferenceGlyph_isSetId_0(self));
};

SpeciesReferenceGlyph.prototype['getBoundingBox'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_SpeciesReferenceGlyph_getBoundingBox_0(self), BoundingBox);
};

SpeciesReferenceGlyph.prototype['setBoundingBox'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_SpeciesReferenceGlyph_setBoundingBox_1(self, arg0);
};

SpeciesReferenceGlyph.prototype['createCubicBezier'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_SpeciesReferenceGlyph_createCubicBezier_0(self), CubicBezier);
};

SpeciesReferenceGlyph.prototype['createLineSegment'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_SpeciesReferenceGlyph_createLineSegment_0(self), LineSegment);
};

SpeciesReferenceGlyph.prototype['getCurve'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_SpeciesReferenceGlyph_getCurve_0(self), Curve);
};

SpeciesReferenceGlyph.prototype['isSetCurve'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_SpeciesReferenceGlyph_isSetCurve_0(self));
};

  SpeciesReferenceGlyph.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_SpeciesReferenceGlyph___destroy___0(self);
}
// Point
function Point() { throw "cannot construct a Point, no constructor in IDL" }
Point.prototype = Object.create(WrapperObject.prototype);
Point.prototype.constructor = Point;
Point.prototype.__class__ = Point;
Point.__cache__ = {};
Module['Point'] = Point;

Point.prototype['getId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Point_getId_0(self));
};

Point.prototype['setId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Point_setId_1(self, arg0);
};

Point.prototype['isSetId'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_Point_isSetId_0(self));
};

Point.prototype['setX'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Point_setX_1(self, arg0);
};

Point.prototype['setY'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Point_setY_1(self, arg0);
};

Point.prototype['setZ'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Point_setZ_1(self, arg0);
};

Point.prototype['setXOffset'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Point_setXOffset_1(self, arg0);
};

Point.prototype['setYOffset'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Point_setYOffset_1(self, arg0);
};

Point.prototype['setZOffset'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Point_setZOffset_1(self, arg0);
};

Point.prototype['x'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Point_x_0(self);
};

Point.prototype['y'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Point_y_0(self);
};

Point.prototype['z'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Point_z_0(self);
};

Point.prototype['getXOffset'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Point_getXOffset_0(self);
};

Point.prototype['getYOffset'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Point_getYOffset_0(self);
};

Point.prototype['getZOffset'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Point_getZOffset_0(self);
};

  Point.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_Point___destroy___0(self);
}
// Text
function Text() { throw "cannot construct a Text, no constructor in IDL" }
Text.prototype = Object.create(WrapperObject.prototype);
Text.prototype.constructor = Text;
Text.prototype.__class__ = Text;
Text.__cache__ = {};
Module['Text'] = Text;

Text.prototype['setX'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Text_setX_1(self, arg0);
};

Text.prototype['setY'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Text_setY_1(self, arg0);
};

Text.prototype['setZ'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Text_setZ_1(self, arg0);
};

Text.prototype['getX'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Text_getX_0(self), RelAbsVector);
};

Text.prototype['getY'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Text_getY_0(self), RelAbsVector);
};

Text.prototype['getZ'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Text_getZ_0(self), RelAbsVector);
};

Text.prototype['getFontFamily'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Text_getFontFamily_0(self));
};

Text.prototype['setFontFamily'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Text_setFontFamily_1(self, arg0);
};

Text.prototype['getFontSize'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Text_getFontSize_0(self), RelAbsVector);
};

Text.prototype['setFontSize'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Text_setFontSize_1(self, arg0);
};

Text.prototype['getFontWeight'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Text_getFontWeight_0(self);
};

Text.prototype['setFontWeight'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Text_setFontWeight_1(self, arg0);
};

Text.prototype['getFontStyle'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Text_getFontStyle_0(self);
};

Text.prototype['setFontStyle'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Text_setFontStyle_1(self, arg0);
};

Text.prototype['getTextAnchor'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Text_getTextAnchor_0(self);
};

Text.prototype['getVTextAnchor'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Text_getVTextAnchor_0(self);
};

Text.prototype['setTextAnchor'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Text_setTextAnchor_1(self, arg0);
};

Text.prototype['setVTextAnchor'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Text_setVTextAnchor_1(self, arg0);
};

Text.prototype['isSetTextAnchor'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_Text_isSetTextAnchor_0(self));
};

Text.prototype['isSetVTextAnchor'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_Text_isSetVTextAnchor_0(self));
};

  Text.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_Text___destroy___0(self);
}
// LayoutPkgNamespaces
function LayoutPkgNamespaces(arg0, arg1) {
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  this.ptr = _emscripten_bind_LayoutPkgNamespaces_LayoutPkgNamespaces_2(arg0, arg1);
  getCache(LayoutPkgNamespaces)[this.ptr] = this;
};
LayoutPkgNamespaces.prototype = Object.create(WrapperObject.prototype);
LayoutPkgNamespaces.prototype.constructor = LayoutPkgNamespaces;
LayoutPkgNamespaces.prototype.__class__ = LayoutPkgNamespaces;
LayoutPkgNamespaces.__cache__ = {};
Module['LayoutPkgNamespaces'] = LayoutPkgNamespaces;

  LayoutPkgNamespaces.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_LayoutPkgNamespaces___destroy___0(self);
}
// GeneralGlyph
function GeneralGlyph() { throw "cannot construct a GeneralGlyph, no constructor in IDL" }
GeneralGlyph.prototype = Object.create(WrapperObject.prototype);
GeneralGlyph.prototype.constructor = GeneralGlyph;
GeneralGlyph.prototype.__class__ = GeneralGlyph;
GeneralGlyph.__cache__ = {};
Module['GeneralGlyph'] = GeneralGlyph;

GeneralGlyph.prototype['getId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_GeneralGlyph_getId_0(self));
};

GeneralGlyph.prototype['setId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_GeneralGlyph_setId_1(self, arg0);
};

GeneralGlyph.prototype['isSetId'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_GeneralGlyph_isSetId_0(self));
};

  GeneralGlyph.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_GeneralGlyph___destroy___0(self);
}
// Ellipse
function Ellipse() { throw "cannot construct a Ellipse, no constructor in IDL" }
Ellipse.prototype = Object.create(WrapperObject.prototype);
Ellipse.prototype.constructor = Ellipse;
Ellipse.prototype.__class__ = Ellipse;
Ellipse.__cache__ = {};
Module['Ellipse'] = Ellipse;

Ellipse.prototype['getCX'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Ellipse_getCX_0(self), RelAbsVector);
};

Ellipse.prototype['getCY'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Ellipse_getCY_0(self), RelAbsVector);
};

Ellipse.prototype['getCZ'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Ellipse_getCZ_0(self), RelAbsVector);
};

Ellipse.prototype['getRX'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Ellipse_getRX_0(self), RelAbsVector);
};

Ellipse.prototype['getRY'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Ellipse_getRY_0(self), RelAbsVector);
};

Ellipse.prototype['setCX'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Ellipse_setCX_1(self, arg0);
};

Ellipse.prototype['setCY'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Ellipse_setCY_1(self, arg0);
};

Ellipse.prototype['setCZ'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Ellipse_setCZ_1(self, arg0);
};

Ellipse.prototype['setRX'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Ellipse_setRX_1(self, arg0);
};

Ellipse.prototype['setRY'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Ellipse_setRY_1(self, arg0);
};

Ellipse.prototype['setCenter2D'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_Ellipse_setCenter2D_2(self, arg0, arg1);
};

Ellipse.prototype['setCenter3D'] = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  _emscripten_bind_Ellipse_setCenter3D_3(self, arg0, arg1, arg2);
};

Ellipse.prototype['setRadii'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_Ellipse_setRadii_2(self, arg0, arg1);
};

Ellipse.prototype['getTypeCode'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Ellipse_getTypeCode_0(self);
};

  Ellipse.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_Ellipse___destroy___0(self);
}
// SpeciesGlyph
function SpeciesGlyph() { throw "cannot construct a SpeciesGlyph, no constructor in IDL" }
SpeciesGlyph.prototype = Object.create(WrapperObject.prototype);
SpeciesGlyph.prototype.constructor = SpeciesGlyph;
SpeciesGlyph.prototype.__class__ = SpeciesGlyph;
SpeciesGlyph.__cache__ = {};
Module['SpeciesGlyph'] = SpeciesGlyph;

SpeciesGlyph.prototype['getBoundingBox'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_SpeciesGlyph_getBoundingBox_0(self), BoundingBox);
};

SpeciesGlyph.prototype['setBoundingBox'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_SpeciesGlyph_setBoundingBox_1(self, arg0);
};

SpeciesGlyph.prototype['getId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_SpeciesGlyph_getId_0(self));
};

SpeciesGlyph.prototype['setId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_SpeciesGlyph_setId_1(self, arg0);
};

SpeciesGlyph.prototype['isSetId'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_SpeciesGlyph_isSetId_0(self));
};

SpeciesGlyph.prototype['getSpeciesId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_SpeciesGlyph_getSpeciesId_0(self));
};

SpeciesGlyph.prototype['setSpeciesId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_SpeciesGlyph_setSpeciesId_1(self, arg0);
};

SpeciesGlyph.prototype['isSetSpeciesId'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_SpeciesGlyph_isSetSpeciesId_0(self));
};

  SpeciesGlyph.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_SpeciesGlyph___destroy___0(self);
}
// RenderCubicBezier
function RenderCubicBezier() { throw "cannot construct a RenderCubicBezier, no constructor in IDL" }
RenderCubicBezier.prototype = Object.create(WrapperObject.prototype);
RenderCubicBezier.prototype.constructor = RenderCubicBezier;
RenderCubicBezier.prototype.__class__ = RenderCubicBezier;
RenderCubicBezier.__cache__ = {};
Module['RenderCubicBezier'] = RenderCubicBezier;

RenderCubicBezier.prototype['basePoint1_X'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_RenderCubicBezier_basePoint1_X_0(self), RelAbsVector);
};

RenderCubicBezier.prototype['basePoint1_Y'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_RenderCubicBezier_basePoint1_Y_0(self), RelAbsVector);
};

RenderCubicBezier.prototype['basePoint1_Z'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_RenderCubicBezier_basePoint1_Z_0(self), RelAbsVector);
};

RenderCubicBezier.prototype['setBasePoint1_X'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_RenderCubicBezier_setBasePoint1_X_1(self, arg0);
};

RenderCubicBezier.prototype['setBasePoint1_Y'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_RenderCubicBezier_setBasePoint1_Y_1(self, arg0);
};

RenderCubicBezier.prototype['setBasePoint1_Z'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_RenderCubicBezier_setBasePoint1_Z_1(self, arg0);
};

RenderCubicBezier.prototype['basePoint2_X'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_RenderCubicBezier_basePoint2_X_0(self), RelAbsVector);
};

RenderCubicBezier.prototype['basePoint2_Y'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_RenderCubicBezier_basePoint2_Y_0(self), RelAbsVector);
};

RenderCubicBezier.prototype['basePoint2_Z'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_RenderCubicBezier_basePoint2_Z_0(self), RelAbsVector);
};

RenderCubicBezier.prototype['setBasePoint2_X'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_RenderCubicBezier_setBasePoint2_X_1(self, arg0);
};

RenderCubicBezier.prototype['setBasePoint2_Y'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_RenderCubicBezier_setBasePoint2_Y_1(self, arg0);
};

RenderCubicBezier.prototype['setBasePoint2_Z'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_RenderCubicBezier_setBasePoint2_Z_1(self, arg0);
};

RenderCubicBezier.prototype['setBasePoint1'] = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  _emscripten_bind_RenderCubicBezier_setBasePoint1_3(self, arg0, arg1, arg2);
};

RenderCubicBezier.prototype['setBasePoint2'] = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  _emscripten_bind_RenderCubicBezier_setBasePoint2_3(self, arg0, arg1, arg2);
};

RenderCubicBezier.prototype['getElementName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_RenderCubicBezier_getElementName_0(self));
};

RenderCubicBezier.prototype['getTypeCode'] = function() {
  var self = this.ptr;
  return _emscripten_bind_RenderCubicBezier_getTypeCode_0(self);
};

RenderCubicBezier.prototype['hasRequiredElements'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_RenderCubicBezier_hasRequiredElements_0(self));
};

RenderCubicBezier.prototype['hasRequiredAttributes'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_RenderCubicBezier_hasRequiredAttributes_0(self));
};

  RenderCubicBezier.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_RenderCubicBezier___destroy___0(self);
}
// TextGlyph
function TextGlyph() { throw "cannot construct a TextGlyph, no constructor in IDL" }
TextGlyph.prototype = Object.create(WrapperObject.prototype);
TextGlyph.prototype.constructor = TextGlyph;
TextGlyph.prototype.__class__ = TextGlyph;
TextGlyph.__cache__ = {};
Module['TextGlyph'] = TextGlyph;

TextGlyph.prototype['getBoundingBox'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_TextGlyph_getBoundingBox_0(self), BoundingBox);
};

TextGlyph.prototype['setBoundingBox'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_TextGlyph_setBoundingBox_1(self, arg0);
};

TextGlyph.prototype['getText'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_TextGlyph_getText_0(self));
};

TextGlyph.prototype['setText'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_TextGlyph_setText_1(self, arg0);
};

TextGlyph.prototype['isSetText'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_TextGlyph_isSetText_0(self));
};

  TextGlyph.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_TextGlyph___destroy___0(self);
}
// Transformation2D
function Transformation2D() { throw "cannot construct a Transformation2D, no constructor in IDL" }
Transformation2D.prototype = Object.create(WrapperObject.prototype);
Transformation2D.prototype.constructor = Transformation2D;
Transformation2D.prototype.__class__ = Transformation2D;
Transformation2D.__cache__ = {};
Module['Transformation2D'] = Transformation2D;

  Transformation2D.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_Transformation2D___destroy___0(self);
}
// Image
function Image() { throw "cannot construct a Image, no constructor in IDL" }
Image.prototype = Object.create(WrapperObject.prototype);
Image.prototype.constructor = Image;
Image.prototype.__class__ = Image;
Image.__cache__ = {};
Module['Image'] = Image;

Image.prototype['setCoordinates'] = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  _emscripten_bind_Image_setCoordinates_3(self, arg0, arg1, arg2);
};

Image.prototype['setX'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Image_setX_1(self, arg0);
};

Image.prototype['setY'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Image_setY_1(self, arg0);
};

Image.prototype['setZ'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Image_setZ_1(self, arg0);
};

Image.prototype['getX'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Image_getX_0(self), RelAbsVector);
};

Image.prototype['getY'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Image_getY_0(self), RelAbsVector);
};

Image.prototype['getZ'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Image_getZ_0(self), RelAbsVector);
};

Image.prototype['setDimensions'] = function(arg0, arg1) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  _emscripten_bind_Image_setDimensions_2(self, arg0, arg1);
};

Image.prototype['setWidth'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Image_setWidth_1(self, arg0);
};

Image.prototype['setHeight'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Image_setHeight_1(self, arg0);
};

Image.prototype['getWidth'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Image_getWidth_0(self), RelAbsVector);
};

Image.prototype['getHeight'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_Image_getHeight_0(self), RelAbsVector);
};

Image.prototype['setImageReference'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Image_setImageReference_1(self, arg0);
};

Image.prototype['getImageReference'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Image_getImageReference_0(self));
};

Image.prototype['isSetImageReference'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_Image_isSetImageReference_0(self));
};

Image.prototype['getTypeCode'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Image_getTypeCode_0(self);
};

  Image.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_Image___destroy___0(self);
}
// BoundingBox
function BoundingBox() { throw "cannot construct a BoundingBox, no constructor in IDL" }
BoundingBox.prototype = Object.create(WrapperObject.prototype);
BoundingBox.prototype.constructor = BoundingBox;
BoundingBox.prototype.__class__ = BoundingBox;
BoundingBox.__cache__ = {};
Module['BoundingBox'] = BoundingBox;

BoundingBox.prototype['getId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_BoundingBox_getId_0(self));
};

BoundingBox.prototype['setId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_BoundingBox_setId_1(self, arg0);
};

BoundingBox.prototype['isSetId'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_BoundingBox_isSetId_0(self));
};

BoundingBox.prototype['getDimensions'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_BoundingBox_getDimensions_0(self), Dimensions);
};

BoundingBox.prototype['setDimensions'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_BoundingBox_setDimensions_1(self, arg0);
};

BoundingBox.prototype['getPosition'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_BoundingBox_getPosition_0(self), Point);
};

BoundingBox.prototype['setPosition'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_BoundingBox_setPosition_1(self, arg0);
};

BoundingBox.prototype['setX'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_BoundingBox_setX_1(self, arg0);
};

BoundingBox.prototype['setY'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_BoundingBox_setY_1(self, arg0);
};

BoundingBox.prototype['setZ'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_BoundingBox_setZ_1(self, arg0);
};

BoundingBox.prototype['x'] = function() {
  var self = this.ptr;
  return _emscripten_bind_BoundingBox_x_0(self);
};

BoundingBox.prototype['y'] = function() {
  var self = this.ptr;
  return _emscripten_bind_BoundingBox_y_0(self);
};

BoundingBox.prototype['z'] = function() {
  var self = this.ptr;
  return _emscripten_bind_BoundingBox_z_0(self);
};

  BoundingBox.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_BoundingBox___destroy___0(self);
}
// LayoutModelPlugin
function LayoutModelPlugin() { throw "cannot construct a LayoutModelPlugin, no constructor in IDL" }
LayoutModelPlugin.prototype = Object.create(WrapperObject.prototype);
LayoutModelPlugin.prototype.constructor = LayoutModelPlugin;
LayoutModelPlugin.prototype.__class__ = LayoutModelPlugin;
LayoutModelPlugin.__cache__ = {};
Module['LayoutModelPlugin'] = LayoutModelPlugin;

LayoutModelPlugin.prototype['createLayout'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_LayoutModelPlugin_createLayout_0(self), Layout);
};

LayoutModelPlugin.prototype['getNumLayouts'] = function() {
  var self = this.ptr;
  return _emscripten_bind_LayoutModelPlugin_getNumLayouts_0(self);
};

LayoutModelPlugin.prototype['getLayout'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_LayoutModelPlugin_getLayout_1(self, arg0), Layout);
};

LayoutModelPlugin.prototype['getListOfLayouts'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_LayoutModelPlugin_getListOfLayouts_0(self), ListOfLayouts);
};

  LayoutModelPlugin.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_LayoutModelPlugin___destroy___0(self);
}
// CompartmentGlyph
function CompartmentGlyph() { throw "cannot construct a CompartmentGlyph, no constructor in IDL" }
CompartmentGlyph.prototype = Object.create(WrapperObject.prototype);
CompartmentGlyph.prototype.constructor = CompartmentGlyph;
CompartmentGlyph.prototype.__class__ = CompartmentGlyph;
CompartmentGlyph.__cache__ = {};
Module['CompartmentGlyph'] = CompartmentGlyph;

CompartmentGlyph.prototype['getId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_CompartmentGlyph_getId_0(self));
};

CompartmentGlyph.prototype['setId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_CompartmentGlyph_setId_1(self, arg0);
};

CompartmentGlyph.prototype['isSetId'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_CompartmentGlyph_isSetId_0(self));
};

  CompartmentGlyph.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_CompartmentGlyph___destroy___0(self);
}
// Species
function Species() { throw "cannot construct a Species, no constructor in IDL" }
Species.prototype = Object.create(WrapperObject.prototype);
Species.prototype.constructor = Species;
Species.prototype.__class__ = Species;
Species.__cache__ = {};
Module['Species'] = Species;

Species.prototype['getId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Species_getId_0(self));
};

Species.prototype['setId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return idl_wrapBool(_emscripten_bind_Species_setId_1(self, arg0));
};

Species.prototype['getMetaId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Species_getMetaId_0(self));
};

Species.prototype['setMetaId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_Species_setMetaId_1(self, arg0);
};

Species.prototype['getName'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Species_getName_0(self));
};

Species.prototype['setName'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_Species_setName_1(self, arg0);
};

Species.prototype['getInitialAmount'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Species_getInitialAmount_0(self);
};

Species.prototype['setInitialAmount'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_Species_setInitialAmount_1(self, arg0);
};

Species.prototype['isSetInitialAmount'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_Species_isSetInitialAmount_0(self));
};

Species.prototype['getInitialConcentration'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Species_getInitialConcentration_0(self);
};

Species.prototype['setInitialConcentration'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_Species_setInitialConcentration_1(self, arg0);
};

Species.prototype['isSetInitialConcentration'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_Species_isSetInitialConcentration_0(self));
};

Species.prototype['getHasOnlySubstanceUnits'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_Species_getHasOnlySubstanceUnits_0(self));
};

Species.prototype['setHasOnlySubstanceUnits'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_Species_setHasOnlySubstanceUnits_1(self, arg0);
};

Species.prototype['isSetHasOnlySubstanceUnits'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_Species_isSetHasOnlySubstanceUnits_0(self));
};

Species.prototype['getCompartment'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Species_getCompartment_0(self));
};

Species.prototype['setCompartment'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_Species_setCompartment_1(self, arg0);
};

Species.prototype['isSetCompartment'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_Species_isSetCompartment_0(self));
};

Species.prototype['getUnits'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_Species_getUnits_0(self));
};

Species.prototype['setUnits'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_Species_setUnits_1(self, arg0);
};

Species.prototype['isSetUnits'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_Species_isSetUnits_0(self));
};

Species.prototype['getSBOTerm'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Species_getSBOTerm_0(self);
};

Species.prototype['setSBOTerm'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return _emscripten_bind_Species_setSBOTerm_1(self, arg0);
};

Species.prototype['isSetSBOTerm'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_Species_isSetSBOTerm_0(self));
};

  Species.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_Species___destroy___0(self);
}
// LinearGradient
function LinearGradient() { throw "cannot construct a LinearGradient, no constructor in IDL" }
LinearGradient.prototype = Object.create(WrapperObject.prototype);
LinearGradient.prototype.constructor = LinearGradient;
LinearGradient.prototype.__class__ = LinearGradient;
LinearGradient.__cache__ = {};
Module['LinearGradient'] = LinearGradient;

LinearGradient.prototype['getId'] = function() {
  var self = this.ptr;
  return Pointer_stringify(_emscripten_bind_LinearGradient_getId_0(self));
};

LinearGradient.prototype['setId'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_LinearGradient_setId_1(self, arg0);
};

LinearGradient.prototype['isSetId'] = function() {
  var self = this.ptr;
  return idl_wrapBool(_emscripten_bind_LinearGradient_isSetId_0(self));
};

LinearGradient.prototype['setCoordinates'] = function(arg0, arg1, arg2, arg3) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  if (arg3 && typeof arg3 === 'object') arg3 = arg3.ptr;
  else arg3 = ensureString(arg3);
  _emscripten_bind_LinearGradient_setCoordinates_4(self, arg0, arg1, arg2, arg3);
};

LinearGradient.prototype['setPoint1'] = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  _emscripten_bind_LinearGradient_setPoint1_3(self, arg0, arg1, arg2);
};

LinearGradient.prototype['setPoint2'] = function(arg0, arg1, arg2) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg1 && typeof arg1 === 'object') arg1 = arg1.ptr;
  else arg1 = ensureString(arg1);
  if (arg2 && typeof arg2 === 'object') arg2 = arg2.ptr;
  else arg2 = ensureString(arg2);
  _emscripten_bind_LinearGradient_setPoint2_3(self, arg0, arg1, arg2);
};

LinearGradient.prototype['getXPoint1'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_LinearGradient_getXPoint1_0(self), RelAbsVector);
};

LinearGradient.prototype['getYPoint1'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_LinearGradient_getYPoint1_0(self), RelAbsVector);
};

LinearGradient.prototype['getZPoint1'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_LinearGradient_getZPoint1_0(self), RelAbsVector);
};

LinearGradient.prototype['getXPoint2'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_LinearGradient_getXPoint2_0(self), RelAbsVector);
};

LinearGradient.prototype['getYPoint2'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_LinearGradient_getYPoint2_0(self), RelAbsVector);
};

LinearGradient.prototype['getZPoint2'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_LinearGradient_getZPoint2_0(self), RelAbsVector);
};

LinearGradient.prototype['getNumGradientStops'] = function() {
  var self = this.ptr;
  return _emscripten_bind_LinearGradient_getNumGradientStops_0(self);
};

LinearGradient.prototype['getGradientStop'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  return wrapPointer(_emscripten_bind_LinearGradient_getGradientStop_1(self, arg0), GradientStop);
};

LinearGradient.prototype['createGradientStop'] = function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_LinearGradient_createGradientStop_0(self), GradientStop);
};

  LinearGradient.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_LinearGradient___destroy___0(self);
}
// libsbml__idl__Text__idl__FONT_WEIGHT
Module['Text']['WEIGHT_UNSET'] = _emscripten_enum_libsbml__idl__Text__idl__FONT_WEIGHT_WEIGHT_UNSET();
Module['Text']['WEIGHT_NORMAL'] = _emscripten_enum_libsbml__idl__Text__idl__FONT_WEIGHT_WEIGHT_NORMAL();
Module['Text']['WEIGHT_BOLD'] = _emscripten_enum_libsbml__idl__Text__idl__FONT_WEIGHT_WEIGHT_BOLD();

// libsbml__idl__Text__idl__TEXT_ANCHOR
Module['Text']['ANCHOR_UNSET'] = _emscripten_enum_libsbml__idl__Text__idl__TEXT_ANCHOR_ANCHOR_UNSET();
Module['Text']['ANCHOR_START'] = _emscripten_enum_libsbml__idl__Text__idl__TEXT_ANCHOR_ANCHOR_START();
Module['Text']['ANCHOR_MIDDLE'] = _emscripten_enum_libsbml__idl__Text__idl__TEXT_ANCHOR_ANCHOR_MIDDLE();
Module['Text']['ANCHOR_END'] = _emscripten_enum_libsbml__idl__Text__idl__TEXT_ANCHOR_ANCHOR_END();
Module['Text']['ANCHOR_TOP'] = _emscripten_enum_libsbml__idl__Text__idl__TEXT_ANCHOR_ANCHOR_TOP();
Module['Text']['ANCHOR_BOTTOM'] = _emscripten_enum_libsbml__idl__Text__idl__TEXT_ANCHOR_ANCHOR_BOTTOM();

// libsbml__idl__ASTNodeType_t
Module['AST_PLUS'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_PLUS();
Module['AST_MINUS'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_MINUS();
Module['AST_TIMES'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_TIMES();
Module['AST_DIVIDE'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_DIVIDE();
Module['AST_POWER'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_POWER();
Module['AST_INTEGER'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_INTEGER();
Module['AST_REAL'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_REAL();
Module['AST_REAL_E'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_REAL_E();
Module['AST_RATIONAL'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_RATIONAL();
Module['AST_NAME'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_NAME();
Module['AST_NAME_AVOGADRO'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_NAME_AVOGADRO();
Module['AST_NAME_TIME'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_NAME_TIME();
Module['AST_CONSTANT_E'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_CONSTANT_E();
Module['AST_CONSTANT_FALSE'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_CONSTANT_FALSE();
Module['AST_CONSTANT_PI'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_CONSTANT_PI();
Module['AST_CONSTANT_TRUE'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_CONSTANT_TRUE();
Module['AST_LAMBDA'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_LAMBDA();
Module['AST_FUNCTION'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION();
Module['AST_FUNCTION_ABS'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION_ABS();
Module['AST_FUNCTION_ARCCOS'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION_ARCCOS();
Module['AST_FUNCTION_ARCCOSH'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION_ARCCOSH();
Module['AST_FUNCTION_ARCCOT'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION_ARCCOT();
Module['AST_FUNCTION_ARCCOTH'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION_ARCCOTH();
Module['AST_FUNCTION_ARCCSC'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION_ARCCSC();
Module['AST_FUNCTION_ARCCSCH'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION_ARCCSCH();
Module['AST_FUNCTION_ARCSEC'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION_ARCSEC();
Module['AST_FUNCTION_ARCSECH'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION_ARCSECH();
Module['AST_FUNCTION_ARCSIN'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION_ARCSIN();
Module['AST_FUNCTION_ARCSINH'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION_ARCSINH();
Module['AST_FUNCTION_ARCTAN'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION_ARCTAN();
Module['AST_FUNCTION_ARCTANH'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION_ARCTANH();
Module['AST_FUNCTION_CEILING'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION_CEILING();
Module['AST_FUNCTION_COS'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION_COS();
Module['AST_FUNCTION_COSH'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION_COSH();
Module['AST_FUNCTION_COT'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION_COT();
Module['AST_FUNCTION_COTH'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION_COTH();
Module['AST_FUNCTION_CSC'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION_CSC();
Module['AST_FUNCTION_CSCH'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION_CSCH();
Module['AST_FUNCTION_DELAY'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION_DELAY();
Module['AST_FUNCTION_EXP'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION_EXP();
Module['AST_FUNCTION_FACTORIAL'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION_FACTORIAL();
Module['AST_FUNCTION_FLOOR'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION_FLOOR();
Module['AST_FUNCTION_LN'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION_LN();
Module['AST_FUNCTION_LOG'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION_LOG();
Module['AST_FUNCTION_PIECEWISE'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION_PIECEWISE();
Module['AST_FUNCTION_POWER'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION_POWER();
Module['AST_FUNCTION_ROOT'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION_ROOT();
Module['AST_FUNCTION_SEC'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION_SEC();
Module['AST_FUNCTION_SECH'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION_SECH();
Module['AST_FUNCTION_SIN'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION_SIN();
Module['AST_FUNCTION_SINH'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION_SINH();
Module['AST_FUNCTION_TAN'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION_TAN();
Module['AST_FUNCTION_TANH'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_FUNCTION_TANH();
Module['AST_LOGICAL_AND'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_LOGICAL_AND();
Module['AST_LOGICAL_NOT'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_LOGICAL_NOT();
Module['AST_LOGICAL_OR'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_LOGICAL_OR();
Module['AST_LOGICAL_XOR'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_LOGICAL_XOR();
Module['AST_RELATIONAL_EQ'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_RELATIONAL_EQ();
Module['AST_RELATIONAL_GEQ'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_RELATIONAL_GEQ();
Module['AST_RELATIONAL_GT'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_RELATIONAL_GT();
Module['AST_RELATIONAL_LEQ'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_RELATIONAL_LEQ();
Module['AST_RELATIONAL_LT'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_RELATIONAL_LT();
Module['AST_RELATIONAL_NEQ'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_RELATIONAL_NEQ();
Module['AST_QUALIFIER_BVAR'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_QUALIFIER_BVAR();
Module['AST_QUALIFIER_LOGBASE'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_QUALIFIER_LOGBASE();
Module['AST_QUALIFIER_DEGREE'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_QUALIFIER_DEGREE();
Module['AST_SEMANTICS'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_SEMANTICS();
Module['AST_CONSTRUCTOR_PIECE'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_CONSTRUCTOR_PIECE();
Module['AST_CONSTRUCTOR_OTHERWISE'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_CONSTRUCTOR_OTHERWISE();
Module['AST_UNKNOWN'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_UNKNOWN();
Module['AST_ORIGINATES_IN_PACKAGE'] = _emscripten_enum_libsbml__idl__ASTNodeType_t_AST_ORIGINATES_IN_PACKAGE();

// libsbml__idl__Text__idl__FONT_STYLE
Module['Text']['STYLE_UNSET'] = _emscripten_enum_libsbml__idl__Text__idl__FONT_STYLE_STYLE_UNSET();
Module['Text']['STYLE_NORMAL'] = _emscripten_enum_libsbml__idl__Text__idl__FONT_STYLE_STYLE_NORMAL();
Module['Text']['STYLE_ITALIC'] = _emscripten_enum_libsbml__idl__Text__idl__FONT_STYLE_STYLE_ITALIC();

