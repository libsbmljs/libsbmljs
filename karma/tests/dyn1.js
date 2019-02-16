describe("Dyn test", function() {
  it('Tests the dyn package (1/2)', (done) => {
    libsbml().then((libsbml) => {
        try {
          const coreVersion = 2
          // create the document
          const document = new libsbml.SBMLDocument()

          document.enablePackage(libsbml.DynExtension.prototype.getXmlnsL3V1V1(), 'dyn', true)
          document.setPackageRequired("dyn", true)
          expect(document.isPackageEnabled('dyn')).toEqual(true)

          const distdoc = libsbml.castObject(document.findPlugin("dyn"), libsbml.DistribSBMLDocumentPlugin)
          const model = document.createModel()
          model.setId('singleCell')

          const parser = new libsbml.SBMLFormulaParser()

          let compartment = model.createCompartment()
          compartment.setId("Extracellular")
          compartment.setConstant(true)
          compartment.setSize(8000000)
          compartment.setSpatialDimensions(3.0)

          compartment = model.createCompartment()
          compartment.setId("PlasmaMembrane")
          compartment.setConstant(true)
          compartment.setSize(314)
          compartment.setSpatialDimensions(2.0)

          compartment = model.createCompartment()
          compartment.setId("Cytosol")
          compartment.setConstant(true)
          compartment.setSize(523)
          compartment.setSpatialDimensions(3.0)

          // create the Species

          let species = model.createSpecies()
          species.setId("C_EC")
          species.setCompartment("Extracellular")
          species.setBoundaryCondition(false)
          species.setConstant(false)
          species.setHasOnlySubstanceUnits(false)

          species = model.createSpecies()
          species.setId("RTR_M")
          species.setCompartment("PlasmaMembrane")
          species.setBoundaryCondition(false)
          species.setConstant(false)
          species.setHasOnlySubstanceUnits(false)

          species = model.createSpecies()
          species.setId("RCC_M")
          species.setCompartment("PlasmaMembrane")
          species.setBoundaryCondition(false)
          species.setConstant(false)
          species.setHasOnlySubstanceUnits(false)

          species = model.createSpecies()
          species.setId("A_C")
          species.setCompartment("Cytosol")
          species.setBoundaryCondition(false)
          species.setConstant(false)
          species.setHasOnlySubstanceUnits(false)

          species = model.createSpecies()
          species.setId("AA_C")
          species.setCompartment("Cytosol")
          species.setBoundaryCondition(false)
          species.setConstant(false)
          species.setHasOnlySubstanceUnits(false)

          species = model.createSpecies()
          species.setId("T")
          species.setCompartment("Cytosol")
          species.setBoundaryCondition(false)
          species.setConstant(false)
          species.setInitialConcentration(10)
          species.setHasOnlySubstanceUnits(false)

          species = model.createSpecies()
          species.setId("S")
          species.setCompartment("Cytosol")
          species.setBoundaryCondition(false)
          species.setConstant(false)
          species.setInitialConcentration(5)
          species.setHasOnlySubstanceUnits(false)

          // create the Reactions

          let reaction = model.createReaction()
          reaction.setId("r1")
          reaction.setReversible(true)
          reaction.setCompartment("Extracellular")

          let reactant = reaction.createReactant()
          reactant.setSpecies("RTR_M")
          reactant.setStoichiometry(1)
          reactant.setConstant(true)

          reactant = reaction.createReactant()
          reactant.setSpecies("C_EC")
          reactant.setStoichiometry(1)
          reactant.setConstant(true)

          let product = reaction.createProduct()
          product.setSpecies("RCC_M")
          product.setStoichiometry(1)
          product.setConstant(true)

          reaction = model.createReaction()
          reaction.setId("r2")
          reaction.setReversible(true)
          reaction.setCompartment("Cytosol")

          reactant = reaction.createReactant()
          reactant.setSpecies("A_C")
          reactant.setStoichiometry(1)
          reactant.setConstant(true)

          product = reaction.createProduct()
          product.setSpecies("AA_C")
          product.setStoichiometry(1)
          product.setConstant(true)

          const modifier = reaction.createModifier()
          modifier.setSpecies("RCC_M")

          // Create Event

          let event = model.createEvent()
          event.setUseValuesFromTriggerTime(true)

          let trigger = event.createTrigger()
          trigger.setInitialValue(false)
          trigger.setPersistent(true)
          trigger.setMath(parser.parseL3Formula("AA_C < T"))

          //
          // Get a DynEventPlugin object plugged in the event object.
          //
          // The type of the returned value of SBase::getPlugin() function is
          // SBasePlugin*, and thus the value needs to be cast for the
          // corresponding derived class.
          //
          let eplugin = libsbml.castObject(event.findPlugin("dyn"), libsbml.DynEventPlugin)

          eplugin.setApplyToAll(true)
          eplugin.setCboTerm("http://cbo.biocomplexity.indiana.edu/svn/cbo/trunk/CBO_1_0.owl#CellDeath")

          event = model.createEvent()
          event.setUseValuesFromTriggerTime(true)

          trigger = event.createTrigger()
          trigger.setInitialValue(false)
          trigger.setPersistent(true)
          trigger.setMath(parser.parseL3Formula("AA_C < S"))

          eplugin  = libsbml.castObject(event.findPlugin("dyn"), libsbml.DynEventPlugin)

          eplugin.setApplyToAll(true)
          eplugin.setCboTerm("http://cbo.biocomplexity.indiana.edu/svn/cbo/trunk/CBO_1_0.owl#CellDevision")


          const writer = new libsbml.SBMLWriter()
          const serializedSBML = writer.writeSBMLToString(document)

          // make sure the expected tags are there
          expect(serializedSBML).toContain('dyn:cboTerm')
          expect(serializedSBML).toContain('dyn:applyToAll')

          const reader = new libsbml.SBMLReader()

          const doc_after = reader.readSBMLFromString(serializedSBML)

          for (var i=0; i<doc_after.getNumErrors(); i++) {
            console.log(doc_after.getError(i).getMessage())
          }
          expect(doc_after.getNumErrors()).toEqual(0)
          expect(doc_after.isPackageEnabled('dyn')).toEqual(true)

          libsbml.destroy(document)
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
