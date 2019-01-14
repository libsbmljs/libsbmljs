Object.defineProperty(RelAbsVector.prototype, "r", {
  get: function() {
    return this.getRelativeValue();
  },
  set: function(x) {
    return this.setRelativeValue(x);
  }
});

Object.defineProperty(RelAbsVector.prototype, "a", {
  get: function() {
    return this.getAbsoluteValue();
  },
  set: function(x) {
    return this.setAbsoluteValue(x);
  }
});

RenderPoint.prototype["isBezier"] = function() {
  var swtch = new Module.BezierCaster();
  var result = swtch.isBezier(this);
  Module.destroy(swtch);
  return result;
}

RenderCubicBezier.prototype["isBezier"] = function() {
  return true;
}

Object.defineProperty(Polygon.prototype, "elements", {
  get: function() {
    var result = [];
    var swtch = new Module.BezierCaster();
    for(var i=0; i<this.getNumElements(); i++) {
      var elt = this.getElement(i);
      if (swtch.isBezier(elt)) {
        result.push(swtch.asBezier(elt));
      } else {
        result.push(elt);
      }
    }
    Module.destroy(swtch);
    return result;
  }
});

Object.defineProperty(RenderGroup.prototype, "images", {
  get: function() {
    var result = [];
    var swtch = new Module.PrimitiveCaster();
    for(var i=0; i<this.getNumElements(); i++) {
      var elt = this.getElement(i);
      if (swtch.isImage(elt)) {
        result.push(swtch.asImage(elt));
      }
    }
    Module.destroy(swtch);
    return result;
  }
});

Object.defineProperty(RenderGroup.prototype, "polygons", {
  get: function() {
    var result = [];
    var swtch = new Module.PrimitiveCaster();
    for(var i=0; i<this.getNumElements(); i++) {
      var elt = this.getElement(i);
      if (swtch.isPolygon(elt)) {
        result.push(swtch.asPolygon(elt));
      }
    }
    Module.destroy(swtch);
    return result;
  }
});

Object.defineProperty(RenderGroup.prototype, "text", {
  get: function() {
    var result = [];
    var swtch = new Module.PrimitiveCaster();
    for(var i=0; i<this.getNumElements(); i++) {
      var elt = this.getElement(i);
      if (swtch.isText(elt)) {
        result.push(swtch.asText(elt));
      }
    }
    Module.destroy(swtch);
    return result;
  }
});

Object.defineProperty(RenderGroup.prototype, "rectangles", {
  get: function() {
    var result = [];
    var swtch = new Module.PrimitiveCaster();
    for(var i=0; i<this.getNumElements(); i++) {
      var elt = this.getElement(i);
      if (swtch.isRectangle(elt)) {
        result.push(swtch.asRectangle(elt));
      }
    }
    Module.destroy(swtch);
    return result;
  }
});

Object.defineProperty(RenderGroup.prototype, "ellipses", {
  get: function() {
    var result = [];
    var swtch = new Module.PrimitiveCaster();
    for(var i=0; i<this.getNumElements(); i++) {
      var elt = this.getElement(i);
      if (swtch.isEllipse(elt)) {
        result.push(swtch.asEllipse(elt));
      }
    }
    Module.destroy(swtch);
    return result;
  }
});

Object.defineProperty(RenderGroup.prototype, "curves", {
  get: function() {
    var result = [];
    var swtch = new Module.PrimitiveCaster();
    for(var i=0; i<this.getNumElements(); i++) {
      var elt = this.getElement(i);
      if (swtch.isRenderCurve(elt)) {
        result.push(swtch.asRenderCurve(elt));
      }
    }
    Module.destroy(swtch);
    return result;
  }
});

Object.defineProperty(GradientBase.prototype, "stops", {
  get: function errors() {
    var result = [];
    for(var i=0; i<this.getNumGradientStops(); i++) {
      result.push(this.getGradientStop(i));
    }
    return result;
  }
});

Object.defineProperty(LinearGradient.prototype, "stops", {
  get: function errors() {
    var result = [];
    for(var i=0; i<this.getNumGradientStops(); i++) {
      result.push(this.getGradientStop(i));
    }
    return result;
  }
});

Object.defineProperty(RadialGradient.prototype, "stops", {
  get: function errors() {
    var result = [];
    for(var i=0; i<this.getNumGradientStops(); i++) {
      result.push(this.getGradientStop(i));
    }
    return result;
  }
});

// Local

Object.defineProperty(LocalRenderInformation.prototype, "colors", {
  get: function errors() {
    var result = [];
    for(var i=0; i<this.getNumColorDefinitions(); i++) {
      result.push(this.getColorDefinition(i));
    }
    return result;
  }
});

Object.defineProperty(LocalRenderInformation.prototype, "gradients", {
  get: function errors() {
    var swtch = new Module.GradientCaster();
    var result = [];
    for(var i=0; i<this.getNumGradientDefinitions(); i++) {
      if(swtch.isLinear(this.getGradientDefinition(i))) {
        result.push(swtch.asLinear(this.getGradientDefinition(i)));
      } else if(swtch.isRadial(this.getGradientDefinition(i))) {
        result.push(swtch.asRadial(this.getGradientDefinition(i)));
      }
    }
    return result;
  }
});

Object.defineProperty(LocalRenderInformation.prototype, "lineendings", {
  get: function errors() {
    var result = [];
    for(var i=0; i<this.getNumLineEndings(); i++) {
      result.push(this.getLineEnding(i));
    }
    return result;
  }
});

Object.defineProperty(LocalRenderInformation.prototype, "styles", {
  get: function errors() {
    var result = [];
    for(var i=0; i<this.getNumStyles(); i++) {
      result.push(this.getStyle(i));
    }
    return result;
  }
});

// Global

Object.defineProperty(GlobalRenderInformation.prototype, "colors", {
  get: function errors() {
    var result = [];
    for(var i=0; i<this.getNumColorDefinitions(); i++) {
      result.push(this.getColorDefinition(i));
    }
    return result;
  }
});

Object.defineProperty(GlobalRenderInformation.prototype, "gradients", {
  get: function errors() {
    var swtch = new Module.GradientCaster();
    var result = [];
    for(var i=0; i<this.getNumGradientDefinitions(); i++) {
      if(swtch.isLinear(this.getGradientDefinition(i))) {
        result.push(swtch.asLinear(this.getGradientDefinition(i)));
      } else if(swtch.isRadial(this.getGradientDefinition(i))) {
        result.push(swtch.asRadial(this.getGradientDefinition(i)));
      }
    }
    return result;
  }
});

Object.defineProperty(GlobalRenderInformation.prototype, "lineendings", {
  get: function errors() {
    var result = [];
    for(var i=0; i<this.getNumLineEndings(); i++) {
      result.push(this.getLineEnding(i));
    }
    return result;
  }
});

Object.defineProperty(GlobalRenderInformation.prototype, "styles", {
  get: function errors() {
    var result = [];
    for(var i=0; i<this.getNumStyles(); i++) {
      result.push(this.getStyle(i));
    }
    return result;
  }
});

Object.defineProperty(RenderLayoutPlugin.prototype, "renderinfo", {
  get: function errors() {
    var result = [];
    for(var i=0; i<this.getNumLocalRenderInformationObjects(); i++) {
      result.push(this.getRenderInformation(i));
    }
    return result;
  }
});

RenderExtension["getXmlnsL2"] = function(name) {
  var wrap = new Module.RenderExtensionWrapper();
  var result = wrap.getXmlnsL2();
  Module.destroy(wrap);
  return result;
}

RenderExtension["getXmlnsL3V1V1"] = function(name) {
  var wrap = new Module.RenderExtensionWrapper();
  var result = wrap.getXmlnsL3V1V1();
  Module.destroy(wrap);
  return result;
}

SBasePlugin.prototype["asRenderListOfLayoutsPlugin"] = function(name) {
  var swtch = new Module.RenderCaster();
  var result = swtch.castToRenderListOfLayoutsPlugin(this);
  Module.destroy(swtch);
  return result;
}

SBasePlugin.prototype["asRenderLayoutPlugin"] = function(name) {
  var swtch = new Module.RenderCaster();
  var result = swtch.castToRenderLayoutPlugin(this);
  Module.destroy(swtch);
  return result;
}
