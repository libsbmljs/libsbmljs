Object.defineProperty(Reaction.prototype, "reactants", {
  get: function species() {
    var result = [];
    for(var i=0; i<this.getNumReactants(); i++) {
      result.push(this.getReactant(i));
    }
    return result;
  }
});

Object.defineProperty(Reaction.prototype, "products", {
  get: function reactions() {
    var result = [];
    for(var i=0; i<this.getNumProducts(); i++) {
      result.push(this.getProduct(i));
    }
    return result;
  }
});

Object.defineProperty(Reaction.prototype, "modifiers", {
  get: function parameters() {
    var result = [];
    for(var i=0; i<this.getNumModifiers(); i++) {
      result.push(this.getModifier(i));
    }
    return result;
  }
});