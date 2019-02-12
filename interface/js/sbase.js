SBase.prototype["findPlugin"] = function(name) {
  for(var i=0; i<this.getNumPlugins(); i++) {
    if(this.getPlugin(i).getPackageName() == name) {
      return this.getPlugin(i);
    }
  }
  throw new Error('SBase: No such plugin ' + name);
}
