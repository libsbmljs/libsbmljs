SpeciesReference.prototype["findSpecies"] = function() {
  for(var i=0; i<this.getModel().getNumSpecies(); i++) {
    if(this.getModel().getSpecies(i).getId() == this.getSpecies()) {
      return this.getModel().getSpecies(i);
    }
  }
  throw new Error('SpeciesReference: No such species with id ' + this.getSpecies());
}