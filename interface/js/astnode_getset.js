Object.defineProperty(ASTNode.prototype, "children", {
  get: function children() {
    var result = [];
    for(var i=0; i<this.getNumChildren(); i++) {
      result.push(this.getChild(i));
    }
    return result;
  }
});

ASTNode.prototype["findPlugin"] = function(name) {
  for(var i=0; i<this.getNumPlugins(); i++) {
    if(this.getPlugin(i).getPackageName() == name) {
      return this.getPlugin(i);
    }
  }
  throw new Error('ASTNode: No such plugin ' + name);
}

var prevASTNodeGetPlugin = ASTNode.prototype.getPlugin;
ASTNode.prototype['getPlugin'] = ASTNode.prototype.getPlugin = /** @suppress {undefinedVars, duplicate} */function(arg0) {
  if (typeof arg0 === "string") {
    var self = this.ptr;
    if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
    return wrapPointer(_manual_bind_ASTNode_getPlugin_str(self, arg0), SBasePlugin);
  } else {
    var m = prevASTNodeGetPlugin.bind(this);
    return m(arg0);
  }
};;
