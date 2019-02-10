describe("Unit test", function() {
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

        const molarity = model.createUnitDefinition()
        molarity.setId('molarity')
        molarity.setName('molarity')

        // we can't wrap global functions so use a helper class
        // to construct units
        const unit_ctor = new libsbml.UnitKindConstructor()

        const mole = molarity.createUnit()
        mole.setKind(unit_ctor.fromName('mole'))
        mole.setExponent(1)
        mole.setMultiplier(1)
        mole.setScale(1)

        const litre = molarity.createUnit()
        // litre.setKind(unit_ctor.fromName('litre')) // alternative
        litre.setKind(libsbml.UNIT_KIND_LITRE)
        litre.setExponent(-1)
        litre.setMultiplier(1)
        litre.setScale(1)

        const sp2 = model.createSpecies()
        sp2.setId('spec2')
        sp2.setName('S2')
        sp2.setInitialAmount(0)
        sp2.setCompartment('comp1')
        sp2.setBoundaryCondition(false)
        sp2.setConstant(false)
        sp2.setHasOnlySubstanceUnits(true)

        const ud2 = model.createUnitDefinition()
        ud2.setId('ud2')
        ud2.setName('moles')
        const u = ud2.createUnit()
        u.setKind(unit_ctor.fromName('mole'))
        u.setExponent(1)
        u.setMultiplier(1)
        u.setScale(1)

        // finished building model - round trip it

        const writer = new libsbml.SBMLWriter()
        const serializedSBML = writer.writeSBMLToString(doc)

        const reader = new libsbml.SBMLReader()
        const doc_after = reader.readSBMLFromString(serializedSBML)

        expect(doc_after.getNumErrors()).toEqual(0)

        const model_after = doc_after.getModel()

        expect(model_after.getNumSpecies()).toEqual(2)

        libsbml.destroy(doc)
        libsbml.destroy(doc_after)
        libsbml.destroy(reader)
        libsbml.destroy(writer)

        done()
    })
  })
})
