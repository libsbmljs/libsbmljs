Object.defineProperty(ASTNode.prototype, "children", {
  get: function children() {
    var result = [];
    for(var i=0; i<this.getNumChildren(); i++) {
      result.push(this.getChild(i));
    }
    return result;
  }
});