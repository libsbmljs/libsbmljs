CubicBezier.prototype["isCubicBezier"] = function(name) {
  return true;
}

LineSegment.prototype["isCubicBezier"] = function(name) {
  var swtch = new Module.CurveCaster();
  // FIXME: mem leak?
  return swtch.isCubicBezier(this);
}

LineSegment.prototype["asCubicBezier"] = function(name) {
  var swtch = new Module.CurveCaster();
  // FIXME: mem leak?
  return swtch.castToCubicBezier(this);
}

Object.defineProperty(Curve.prototype, "segments", {
  get: function errors() {
    var result = [];
    for(var i=0; i<this.getNumCurveSegments(); i++) {
      if(this.getCurveSegment(i).isCubicBezier()) {
        result.push(this.getCurveSegment(i).asCubicBezier());
      } else {
        result.push(this.getCurveSegment(i));
      }
    }
    return result;
  }
});

Object.defineProperty(ReactionGlyph.prototype, "specref", {
  get: function errors() {
    var result = [];
    for(var i=0; i<this.getNumSpeciesReferenceGlyphs(); i++) {
      result.push(this.getSpeciesReferenceGlyph(i));
    }
    return result;
  }
});

Object.defineProperty(BoundingBox.prototype, "x", {
  get: function errors() {
    return this.getPosition().x();
  }
});

Object.defineProperty(BoundingBox.prototype, "y", {
  get: function errors() {
    return this.getPosition().y();
  }
});

Object.defineProperty(BoundingBox.prototype, "z", {
  get: function errors() {
    return this.getPosition().z();
  }
});

Object.defineProperty(BoundingBox.prototype, "width", {
  get: function errors() {
    return this.getDimensions().getWidth();
  },
  set: function(v) {
    this.getDimensions().setWidth(v);
  }
});

Object.defineProperty(BoundingBox.prototype, "height", {
  get: function errors() {
    return this.getDimensions().getHeight();
  },
  set: function(v) {
    this.getDimensions().setHeight(v);
  }
});

Object.defineProperty(BoundingBox.prototype, "depth", {
  get: function errors() {
    return this.getDimensions().getDepth();
  }
});

Object.defineProperty(Layout.prototype, "compglyphs", {
  get: function errors() {
    var result = [];
    for(var i=0; i<this.getNumCompartmentGlyphs(); i++) {
      result.push(this.getCompartmentGlyph(i));
    }
    return result;
  }
});

Object.defineProperty(Layout.prototype, "rxnglyphs", {
  get: function errors() {
    var result = [];
    for(var i=0; i<this.getNumReactionGlyphs(); i++) {
      result.push(this.getReactionGlyph(i));
    }
    return result;
  }
});

Object.defineProperty(Layout.prototype, "specglyphs", {
  get: function errors() {
    var result = [];
    for(var i=0; i<this.getNumSpeciesGlyphs(); i++) {
      result.push(this.getSpeciesGlyph(i));
    }
    return result;
  }
});

Object.defineProperty(Layout.prototype, "txtglyphs", {
  get: function errors() {
    var result = [];
    for(var i=0; i<this.getNumTextGlyphs(); i++) {
      result.push(this.getTextGlyph(i));
    }
    return result;
  }
});

Object.defineProperty(LayoutModelPlugin.prototype, "layouts", {
  get: function errors() {
    var result = [];
    for(var i=0; i<this.getNumLayouts(); i++) {
      result.push(this.getLayout(i));
    }
    return result;
  }
});

LayoutExtension["getXmlnsL2"] = function(name) {
  var wrap = new Module.LayoutExtensionWrapper();
  var result = wrap.getXmlnsL2();
  Module.destroy(wrap);
  return result;
}

LayoutExtension["getXmlnsL3V1V1"] = function(name) {
  var wrap = new Module.LayoutExtensionWrapper();
  var result = wrap.getXmlnsL3V1V1();
  Module.destroy(wrap);
  return result;
}

SBasePlugin.prototype["asLayout"] = function(name) {
  var swtch = new Module.LayoutCaster();
  // FIXME: mem leak?
  return swtch.castToLayoutPlugin(this);
}
