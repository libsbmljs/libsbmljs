describe("Synchronous reading from inline string", function() {
  it("loads SBML from an inline string", (done) => {
    libsbml().then((libsbml) => {
      const sbmlstr = " \
<!-- Created by libAntimony version v2.5 on 2014-10-09 21:22 with libSBML version 5.10.0. --> \
<sbml xmlns=\"http://www.sbml.org/sbml/level3/version1/core\" level=\"3\" version=\"1\"> \
  <model id=\"__main\" name=\"__main\"> \
    <listOfCompartments> \
      <compartment sboTerm=\"SBO:0000410\" id=\"default_compartment\" spatialDimensions=\"3\" size=\"1\" constant=\"true\"/> \
    </listOfCompartments> \
    <listOfSpecies> \
      <species id=\"S1\" compartment=\"default_compartment\" initialConcentration=\"1\" hasOnlySubstanceUnits=\"false\" boundaryCondition=\"false\" constant=\"false\"/> \
      <species id=\"S2\" compartment=\"default_compartment\" initialConcentration=\"0\" hasOnlySubstanceUnits=\"false\" boundaryCondition=\"false\" constant=\"false\"/> \
    </listOfSpecies> \
    <listOfParameters> \
      <parameter id=\"k0\" value=\"0.1\" constant=\"true\"/> \
      <parameter id=\"k1\" value=\"1\" constant=\"true\"/> \
      <parameter id=\"n\" value=\"4\" constant=\"true\"/> \
      <parameter id=\"k2\" value=\"0.2\" constant=\"true\"/> \
    </listOfParameters> \
    <listOfReactions> \
      <reaction id=\"_J0\" reversible=\"true\" fast=\"false\"> \
        <listOfProducts> \
          <speciesReference species=\"S1\" stoichiometry=\"1\" constant=\"true\"/> \
        </listOfProducts> \
        <kineticLaw> \
          <math xmlns=\"http://www.w3.org/1998/Math/MathML\"> \
            <ci> k0 </ci> \
          </math> \
        </kineticLaw> \
      </reaction> \
      <reaction id=\"_J1\" reversible=\"true\" fast=\"false\"> \
        <listOfReactants> \
          <speciesReference species=\"S1\" stoichiometry=\"1\" constant=\"true\"/> \
        </listOfReactants> \
        <listOfProducts> \
          <speciesReference species=\"S2\" stoichiometry=\"1\" constant=\"true\"/> \
        </listOfProducts> \
        <kineticLaw> \
          <math xmlns=\"http://www.w3.org/1998/Math/MathML\"> \
            <apply> \
              <divide/> \
              <apply> \
                <times/> \
                <ci> k1 </ci> \
                <ci> S1 </ci> \
              </apply> \
              <apply> \
                <plus/> \
                <cn type=\"integer\"> 1 </cn> \
                <apply> \
                  <power/> \
                  <ci> S1 </ci> \
                  <ci> n </ci> \
                </apply> \
              </apply> \
            </apply> \
          </math> \
        </kineticLaw> \
      </reaction> \
      <reaction id=\"_J2\" reversible=\"true\" fast=\"false\"> \
        <listOfReactants> \
          <speciesReference species=\"S2\" stoichiometry=\"1\" constant=\"true\"/> \
        </listOfReactants> \
        <kineticLaw> \
          <math xmlns=\"http://www.w3.org/1998/Math/MathML\"> \
            <apply> \
              <times/> \
              <ci> k2 </ci> \
              <ci> S2 </ci> \
            </apply> \
          </math> \
        </kineticLaw> \
      </reaction> \
    </listOfReactions> \
  </model> \
</sbml>"
      const reader = new libsbml.SBMLReader()
      const doc = reader.readSBMLFromString(sbmlstr)

      // read with no errors
      expect(doc.getNumErrors()).toEqual(0)

      const  model = doc.getModel()

      // three reactions in model
      expect(model.getNumReactions()).toEqual(3)
      expect(model.getReaction(0).getId()).toEqual('_J0')
      expect(model.getReaction(0).getNumReactants()).toEqual(0)
      expect(model.getReaction(1).getId()).toEqual('_J1')
      expect(model.getReaction(1).getNumReactants()).toEqual(1)
      expect(model.getReaction(1).getReactant(0).getSpecies()).toEqual('S1')
      expect(model.getReaction(2).getId()).toEqual('_J2')
      expect(model.getReaction(2).getNumReactants()).toEqual(1)
      expect(model.getReaction(2).getReactant(0).getSpecies()).toEqual('S2')

      // consistency check
      expect(model.reactions.length).toEqual(3)
      expect(model.reactions[0].getId()).toEqual('_J0')
      expect(model.reactions[0].getNumReactants()).toEqual(0)
      expect(model.reactions[1].getId()).toEqual('_J1')
      expect(model.reactions[1].getNumReactants()).toEqual(1)
      expect(model.reactions[1].getReactant(0).getSpecies()).toEqual('S1')
      expect(model.reactions[2].getId()).toEqual('_J2')
      expect(model.reactions[2].getNumReactants()).toEqual(1)
      expect(model.reactions[2].getReactant(0).getSpecies()).toEqual('S2')

      libsbml.destroy(doc)
      libsbml.destroy(reader)

      done()
    })
  })
})

describe("Asynchronous reading from URL", function() {
  it('loads SBML asynchronously using an XHR', (done) => {
    libsbml().then((libsbml) => {
      const reader = new libsbml.SBMLReader()
      libsbml.readSBMLFromURL('base/karma/models/decay-model.xml').then((doc) => {
        // read with no errors
        expect(doc.getNumErrors()).toEqual(0)

        const decayModel = doc.getModel()
        expect(decayModel.getNumReactions()).toEqual(1)

        // test reaction id
        expect(decayModel.getReaction(0).getId()).toEqual('J0')
        expect(decayModel.reactions[0].getId()).toEqual('J0')

        // test reactants / products
        expect(decayModel.reactions[0].getNumReactants()).toEqual(1)
        expect(decayModel.reactions[0].reactants.length).toEqual(1)
        expect(decayModel.reactions[0].getReactant(0).getSpecies()).toEqual('Node0')
        expect(decayModel.reactions[0].reactants[0].getSpecies()).toEqual('Node0')

        expect(decayModel.reactions[0].getNumProducts()).toEqual(1)
        expect(decayModel.reactions[0].products.length).toEqual(1)
        expect(decayModel.reactions[0].getProduct(0).getSpecies()).toEqual('Node1')
        expect(decayModel.reactions[0].products[0].getSpecies()).toEqual('Node1')

        expect(decayModel.reactions[0].getNumModifiers()).toEqual(0)
        expect(decayModel.reactions[0].modifiers.length).toEqual(0)

        // test species
        expect(decayModel.getNumSpecies()).toEqual(2)
        expect(decayModel.species.length).toEqual(2)
        expect(decayModel.species[0].getId()).toEqual('Node0')
        expect(decayModel.species[0].getCompartment()).toEqual('compartment')
        expect(decayModel.species[0].getInitialConcentration()).toEqual(10)
        expect(decayModel.species[1].getId()).toEqual('Node1')
        expect(decayModel.species[1].getCompartment()).toEqual('compartment')
        expect(decayModel.species[1].getInitialConcentration()).toEqual(0)

        // test AST nodes with API
        const root = decayModel.reactions[0].getKineticLaw().getMath()
        expect(root.getType()).toBe(libsbml.AST_TIMES)
        expect(root.getNumChildren()).toEqual(2)
        expect(root.getChild(0).getType()).toBe(libsbml.AST_NAME)
        expect(root.getChild(1).getType()).toBe(libsbml.AST_NAME)

        // test AST nodes with array wrappers
        const root2 = decayModel.reactions[0].getKineticLaw().getMath()
        expect(root2.getType()).toBe(libsbml.AST_TIMES)
        expect(root2.children.length).toEqual(2)
        expect(root2.children[0].getType()).toBe(libsbml.AST_NAME)
        expect(root2.children[0].getName()).toEqual('J0_k')
        expect(root2.children[1].getType()).toBe(libsbml.AST_NAME)
        expect(root2.children[1].getName()).toEqual('Node0')
        // with a for-each
        root2.children.forEach(function(x) {
          expect(x.getType()).toBe(libsbml.AST_NAME)
        })

        libsbml.destroy(doc)

        done()
      })
    })
  })
})
