describe("Dyn test", function() {
  it('Tests the dyn package (1/2)', (done) => {
    libsbml().then((libsbml) => {
        try {
          const coreVersion = 2
          // create the document
          const document = new libsbml.SBMLDocument()

          document.enablePackage(libsbml.DynExtension.prototype.getXmlnsL3V1V1(), 'dyn', true)
          document.enablePackage(libsbml.CompExtension.prototype.getXmlnsL3V1V1(), 'comp', true)
          document.setPackageRequired("dyn", true)
          document.setPackageRequired("comp", true)
          expect(document.isPackageEnabled('dyn')).toEqual(true)
          expect(document.isPackageEnabled('comp')).toEqual(true)

          const distdoc = libsbml.castObject(document.findPlugin("dyn"), libsbml.DistribSBMLDocumentPlugin)
          const model = document.createModel()
          model.setId('singleCell')

          const parser = new libsbml.SBMLFormulaParser()

          // create the Compartment

          let compartment = model.createCompartment()
          compartment.setId("Loc1")
          compartment.setConstant(false)
          compartment.setSize(1)
          compartment.setSpatialDimensions(2.0)

          let cplugin = libsbml.castObject(compartment.findPlugin("dyn"), libsbml.DynCompartmentPlugin)

          let component = cplugin.createSpatialComponent()
          component.setSpatialIndex(libsbml.DYN_SPATIALKIND_CARTESIANX)
          component.setVariable("q1_X")

          component = cplugin.createSpatialComponent()
          component.setSpatialIndex(libsbml.DYN_SPATIALKIND_CARTESIANY)
          component.setVariable("q1_Y")

          let compPlugin = libsbml.castObject(compartment.findPlugin("comp"), libsbml.CompSBasePlugin)

          let relement = compPlugin.createReplacedElement()
          relement.setIdRef("C")
          relement.setSubmodelRef("GRID_1_1_cell")

          compartment = model.createCompartment()
          compartment.setId("Loc2")
          compartment.setConstant(false)
          compartment.setSize(1)
          compartment.setSpatialDimensions(2.0)

          cplugin = libsbml.castObject(compartment.findPlugin("dyn"), libsbml.DynCompartmentPlugin)

          component = cplugin.createSpatialComponent()
          component.setSpatialIndex(libsbml.DYN_SPATIALKIND_CARTESIANX)
          component.setVariable("q2_X")

          component = cplugin.createSpatialComponent()
          component.setSpatialIndex(libsbml.DYN_SPATIALKIND_CARTESIANY)
          component.setVariable("q2_Y")

          compPlugin = libsbml.castObject(compartment.findPlugin("comp"), libsbml.CompSBasePlugin)

          relement = compPlugin.createReplacedElement()
          relement.setIdRef("C")
          relement.setSubmodelRef("GRID_1_2_cell")

          compartment = model.createCompartment()
          compartment.setId("Loc3")
          compartment.setConstant(false)
          compartment.setSize(1)
          compartment.setSpatialDimensions(2.0)

          cplugin = libsbml.castObject(compartment.findPlugin("dyn"), libsbml.DynCompartmentPlugin)

          component = cplugin.createSpatialComponent()
          component.setSpatialIndex(libsbml.DYN_SPATIALKIND_CARTESIANX)
          component.setVariable("q3_X")

          component = cplugin.createSpatialComponent()
          component.setSpatialIndex(libsbml.DYN_SPATIALKIND_CARTESIANY)
          component.setVariable("q3_Y")

          compPlugin = libsbml.castObject(compartment.findPlugin("comp"), libsbml.CompSBasePlugin)

          relement = compPlugin.createReplacedElement()
          relement.setIdRef("C")
          relement.setSubmodelRef("GRID_2_1_cell")

          compartment = model.createCompartment()
          compartment.setId("Loc4")
          compartment.setConstant(false)
          compartment.setSize(1)
          compartment.setSpatialDimensions(2.0)

          cplugin = libsbml.castObject(compartment.findPlugin("dyn"), libsbml.DynCompartmentPlugin)

          component = cplugin.createSpatialComponent()
          component.setSpatialIndex(libsbml.DYN_SPATIALKIND_CARTESIANX)
          component.setVariable("q4_X")

          component = cplugin.createSpatialComponent()
          component.setSpatialIndex(libsbml.DYN_SPATIALKIND_CARTESIANY)
          component.setVariable("q4_Y")

          compPlugin = libsbml.castObject(compartment.findPlugin("comp"), libsbml.CompSBasePlugin)

          relement = compPlugin.createReplacedElement()
          relement.setIdRef("C")
          relement.setSubmodelRef("GRID_2_2_cell")

          // create Parameters

          let param = model.createParameter()
          param.initDefaults()
          param.setId("q1_X")
          param.setValue(1)

          param = model.createParameter()
          param.initDefaults()
          param.setId("q1_Y")
          param.setValue(1)

          param = model.createParameter()
          param.initDefaults()
          param.setId("q2_X")
          param.setValue(2)

          param = model.createParameter()
          param.initDefaults()
          param.setId("q2_Y")
          param.setValue(1)

          param = model.createParameter()
          param.initDefaults()
          param.setId("q3_X")
          param.setValue(1)

          param = model.createParameter()
          param.initDefaults()
          param.setId("q3_Y")
          param.setValue(2)

          param = model.createParameter()
          param.initDefaults()
          param.setId("q4_X")
          param.setValue(2)

          param = model.createParameter()
          param.initDefaults()
          param.setId("q4_Y")
          param.setValue(2)

          // create SubModels

          const mplugin = libsbml.castObject(model.findPlugin("comp"), libsbml.CompModelPlugin)

          let submodel = mplugin.createSubmodel()
          submodel.setId("GRID_1_1_cell")
          submodel.setModelRef("Cell")

          submodel = mplugin.createSubmodel()
          submodel.setId("GRID_1_2_cell")
          submodel.setModelRef("Cell")

          submodel = mplugin.createSubmodel()
          submodel.setId("GRID_2_1_cell")
          submodel.setModelRef("Cell")

          submodel = mplugin.createSubmodel()
          submodel.setId("GRID_2_2_cell")
          submodel.setModelRef("Cell")

          // create the ModelDefinition

          const dplugin = libsbml.castObject(document.findPlugin("comp"), libsbml.CompSBMLDocumentPlugin)

          const mdef = dplugin.createModelDefinition()
          mdef.setId("Cell")

          compartment = mdef.createCompartment()
          compartment.initDefaults()
          compartment.setId("C")
          compartment.setSpatialDimensions(2.0)
          compartment.setSize(1.0)

          let species = mdef.createSpecies()
          species.setId("R")
          species.setCompartment("C")
          species.setHasOnlySubstanceUnits(false)
          species.setBoundaryCondition(false)
          species.setConstant(false)

          species = mdef.createSpecies()
          species.setId("S")
          species.setCompartment("C")
          species.setHasOnlySubstanceUnits(false)
          species.setBoundaryCondition(false)
          species.setConstant(false)

          let reaction = mdef.createReaction()
          reaction.setId("Degradation_R")
          reaction.setReversible(false)
          reaction.setCompartment("C")

          let reactant = reaction.createReactant();
          reactant.setSpecies("R")
          reactant.setStoichiometry(1)
          reactant.setConstant(true)

          reaction = mdef.createReaction()
          reaction.setId("Degradation_S")
          reaction.setReversible(false)
          reaction.setCompartment("C")

          reactant = reaction.createReactant()
          reactant.setSpecies("S")
          reactant.setStoichiometry(1)
          reactant.setConstant(true)
          document.checkConsistency()

          const event = mdef.createEvent()
          event.setId("event0")
          event.setUseValuesFromTriggerTime(false)

          const eplugin = libsbml.castObject(event.findPlugin("dyn"), libsbml.DynEventPlugin)
          eplugin.setApplyToAll(true)
          eplugin.setCboTerm("http://cbo.biocomplexity.indiana.edu/svn/cbo/trunk/CBO_1_0.owl#CellDivision")

          const trigger = event.createTrigger()
          trigger.setInitialValue(false)
          trigger.setPersistent(false)
          trigger.setMath(parser.parseL3Formula("true"))


          const writer = new libsbml.SBMLWriter()
          const serializedSBML = writer.writeSBMLToString(document)

          // make sure the expected tags are there
          expect(serializedSBML).toContain('dyn:cboTerm')
          expect(serializedSBML).toContain('dyn:spatialComponent')

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
