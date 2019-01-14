Object.defineProperty(SBMLDocument.prototype, "errors", {
  get: function errors() {
    var result = [];
    for(var i=0; i<this.getNumErrors(); i++) {
      result.push(this.getError(i));
    }
    return result;
  }
});

Object.defineProperty(SBMLDocument.prototype, "plugins", {
  get: function errors() {
    var result = [];
    for(var i=0; i<this.getNumPlugins(); i++) {
      result.push(this.getPlugin(i));
    }
    return result;
  }
});

SBMLDocument.prototype["findPlugin"] = function(name) {
  for(var i=0; i<this.getNumPlugins(); i++) {
    if(this.getPlugin(i).getPackageName() == name) {
      return this.getPlugin(i);
    }
  }
  throw new Error('SBMLDocument: No such plugin ' + name);
}

SBMLDocument.prototype["hasPlugin"] = function(name) {
  for(var i=0; i<this.getNumPlugins(); i++) {
    if(this.getPlugin(i).getPackageName() == name) {
      return true;
    }
  }
  return false;
}
