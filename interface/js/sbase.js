SBase.prototype["findPlugin"] = function(name) {
  for(var i=0; i<this.getNumPlugins(); i++) {
    if(this.getPlugin(i).getPackageName() == name) {
      return this.getPlugin(i);
    }
  }
  throw new Error('SBase: No such plugin ' + name);
}

var prevGetPlugin = SBase.prototype.getPlugin;
SBase.prototype['getPlugin'] = SBase.prototype.getPlugin = /** @suppress {undefinedVars, duplicate} */function(arg0) {
  if (typeof arg0 === "string") {
    var self = this.ptr;
    if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
    return wrapPointer(_manual_bind_SBase_getPlugin_str(self, arg0), SBasePlugin);
  } else {
    var m = prevGetPlugin.bind(this);
    return m(arg0);
  }
};;
