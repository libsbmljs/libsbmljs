describe("Writing test", function() {
  it('Tests writing of an SBML model', (done) => {
    libsbml().then((libsbml) => {
        // create new document
        const doc = new libsbml.SBMLDocument(3,2)

        // expect(doc).not.toEqual(0)

        const model = doc.createModel()
        model.setId('model1')

        const comp = model.createCompartment()
        comp.setId('comp1')
        comp.setSize(1)
        comp.setConstant(true)

        const sp1 = model.createSpecies()
        sp1.setId('spec1')
        sp1.setName('S1')
        sp1.setInitialAmount(0)
        sp1.setCompartment('comp1')
        sp1.setBoundaryCondition(false)
        sp1.setConstant(false)
        sp1.setHasOnlySubstanceUnits(false)

        const sp2 = model.createSpecies()
        sp2.setId('spec2')
        sp2.setName('S2')
        sp2.setInitialAmount(0)
        sp2.setCompartment('comp1')
        sp2.setBoundaryCondition(false)
        sp2.setConstant(false)
        sp2.setHasOnlySubstanceUnits(false)

        const rxn = model.createReaction()
        rxn.setId('reaction1')
        rxn.setReversible(false)

        const spr1 = rxn.createReactant()
        spr1.setSpecies('spec1')
        spr1.setConstant(false)

        const spr2 = rxn.createProduct()
        spr2.setSpecies('spec2')
        spr2.setConstant(false)

        const k1 = rxn.createKineticLaw()
        const parser = new libsbml.SBMLFormulaParser()
        const kmath = parser.parseL3Formula('S1*S2')

        k1.setMath(kmath)

        // finished building model - round trip it

        const writer = new libsbml.SBMLWriter()
        const serializedSBML = writer.writeSBMLToString(doc)

        const reader = new libsbml.SBMLReader()
        const doc_after = reader.readSBMLFromString(serializedSBML)

        expect(doc_after.getNumErrors()).toEqual(0)

        const model_after = doc_after.getModel()

        expect(model_after.getNumReactions()).toEqual(1)
        expect(model_after.getReaction(0).getId()).toEqual('reaction1')
        const ast_root = model_after.getReaction(0).getKineticLaw().getMath()
        expect(ast_root.getNumChildren()).toEqual(2)
        expect(ast_root.getChild(0).getType()).toEqual(libsbml.AST_NAME)
        expect(ast_root.getChild(0).getName()).toEqual('S1')
        expect(ast_root.getChild(1).getType()).toEqual(libsbml.AST_NAME)
        expect(ast_root.getChild(1).getName()).toEqual('S2')

        expect(model_after.getNumSpecies()).toEqual(2)

        expect(model_after.getSpecies(0).getId()).toEqual('spec1')
        expect(model_after.getSpecies(0).getCompartment()).toEqual('comp1')
        expect(model_after.getSpecies(0).getBoundaryCondition()).toBe(false)
        expect(model_after.getSpecies(0).getConstant()).toBe(false)
        expect(model_after.getSpecies(0).getHasOnlySubstanceUnits()).toBe(false)

        expect(model_after.getSpecies(1).getId()).toEqual('spec2')
        expect(model_after.getSpecies(1).getCompartment()).toEqual('comp1')
        expect(model_after.getSpecies(1).getBoundaryCondition()).toBe(false)
        expect(model_after.getSpecies(1).getConstant()).toBe(false)
        expect(model_after.getSpecies(1).getHasOnlySubstanceUnits()).toBe(false)

        libsbml.destroy(doc)
        libsbml.destroy(doc_after)
        libsbml.destroy(reader)
        libsbml.destroy(writer)

        done()
    })
  })
})
