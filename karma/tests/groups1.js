describe("FBC test", function() {
  it('Tests the groups package', (done) => {
    libsbml().then((libsbml) => {
        try {
          // create new document
          const doc = new libsbml.SBMLDocument(3,2)

          doc.enablePackage(libsbml.GroupsExtension.prototype.getXmlnsL3V1V1(), 'groups', true)
          doc.setPackageRequired("groups", false)
          expect(doc.isPackageEnabled('groups')).toEqual(true)

          const model = doc.createModel()
          model.setId('model1')

          let compartment = model.createCompartment()
          compartment.setId("cytosol")
          compartment.setConstant(true)

          compartment=model.createCompartment()
          compartment.setId("mitochon")
          compartment.setConstant(true)

          // create the Species

          let species = model.createSpecies()
          species.setId("ATPc")
          species.setCompartment("cytosol")
          species.setInitialConcentration(1)
          species.setHasOnlySubstanceUnits(false)
          species.setBoundaryCondition(false)
          species.setConstant(false)

          species = model.createSpecies()
          species.setId("ATPm")
          species.setCompartment("mitochon")
          species.setInitialConcentration(2)
          species.setHasOnlySubstanceUnits(false)
          species.setBoundaryCondition(false)
          species.setConstant(false)

          // create the Groups

          //
          // Get a GroupsModelPlugin object plugged in the model object.
          //
          const mplugin = libsbml.castObject(model.findPlugin("groups"), libsbml.GroupsModelPlugin)

          //
          // Creates a Group object via GroupsModelPlugin object.
          //
          const group = mplugin.createGroup()

          group.setId("ATP")
          group.setKind(libsbml.GROUP_KIND_CLASSIFICATION)
          group.setSBOTerm("SBO:0000252")

          let member = group.createMember()
          member.setIdRef("ATPc")

          member = group.createMember()
          member.setIdRef("ATPm")

          const writer = new libsbml.SBMLWriter()
          const serializedSBML = writer.writeSBMLToString(doc)

          // make sure the expected tags are there
          console.log(serializedSBML)
          // expect(serializedSBML).toContain('fbc:listOfObjectives')

          const reader = new libsbml.SBMLReader()

          const doc_after = reader.readSBMLFromString(serializedSBML)

          expect(doc_after.getNumErrors()).toEqual(0)
          expect(doc_after.isPackageEnabled('groups')).toEqual(true)

          libsbml.destroy(doc)
          libsbml.destroy(doc_after)
        } catch(error) {
          fail(error)
          console.log(error.stack)
        } finally {
          done()
        }
    })
  })
})
