describe("Comp test 1", function() {
  it('Tests the comp package', (done) => {
    libsbml().then((libsbml) => {
        try {
          // create new document
          const doc = new libsbml.SBMLDocument(3,2)

          doc.enablePackage(libsbml.CompExtension.prototype.getXmlnsL3V1V1(), 'comp', true)
          doc.setPackageRequired('comp', true)
          expect(doc.isPackageEnabled('comp')).toEqual(true)

          // expect(doc).not.toEqual(0)

          // create the Model
          const model=doc.createModel()
          model.setId("aggregate")

          const plugin = doc.findPlugin('comp')
          expect(plugin.getPackageName()).toEqual('comp')

          //Create our submodel
          const compdoc = libsbml.castObject(plugin, libsbml.CompSBMLDocumentPlugin)
          compdoc.setRequired(true)
          const mod1 = compdoc.createModelDefinition()
          mod1.setId("enzyme")
          mod1.setName("enzyme")

          const comp=mod1.createCompartment()
          comp.setSpatialDimensions(3)
          comp.setConstant(true)
          comp.setId("comp")
          comp.setSize(1)

          let spec = mod1.createSpecies()
          spec.setCompartment("comp")
          spec.setHasOnlySubstanceUnits(false)
          spec.setConstant(false)
          spec.setBoundaryCondition(false)
          spec.setId("S")

          spec = mod1.createSpecies()
          spec.setCompartment("comp")
          spec.setHasOnlySubstanceUnits(false)
          spec.setConstant(false)
          spec.setBoundaryCondition(false)
          spec.setId("E")

          spec = mod1.createSpecies()
          spec.setCompartment("comp")
          spec.setHasOnlySubstanceUnits(false)
          spec.setConstant(false)
          spec.setBoundaryCondition(false)
          spec.setId("D")

          spec = mod1.createSpecies()
          spec.setCompartment("comp")
          spec.setHasOnlySubstanceUnits(false)
          spec.setConstant(false)
          spec.setBoundaryCondition(false)
          spec.setId("ES")

          const rxn = model.createReaction()
          rxn.setReversible(true)
          rxn.setId("J0")

          const rxn2 = model.createReaction()
          rxn2.setReversible(true)
          rxn2.setId("J1")

          const sr = rxn.createReactant()
          sr.setConstant(true)
          sr.setStoichiometry(1)
          sr.setSpecies("S")

          sr.setSpecies("E")
          rxn.addReactant(sr)
          rxn2.addProduct(sr)

          sr.setSpecies("ES")
          rxn.addProduct(sr)
          rxn2.addReactant(sr)

          sr.setSpecies("D")
          rxn2.addProduct(sr)

          // Create a submodel
          const model_plugin = doc.getModel().findPlugin('comp')
          expect(model_plugin.getPackageName()).toEqual('comp')
          const comp_model_plugin = libsbml.castObject(model_plugin, libsbml.CompModelPlugin)

          const submod1 = comp_model_plugin.createSubmodel()
          submod1.setId("submod1")
          submod1.setModelRef("enzyme")

          const submod2 = comp_model_plugin.createSubmodel()
          submod2.setId("submod2")
          submod2.setModelRef("enzyme")

          const writer = new libsbml.SBMLWriter()
          const serializedSBML = writer.writeSBMLToString(doc)

          // make sure the expected tags are there
          console.log(serializedSBML)
          expect(serializedSBML).toContain('comp:listOfModelDefinitions')
          expect(serializedSBML).toContain('comp:modelDefinition')
          expect(serializedSBML).toContain('comp:submodel')

          const reader = new libsbml.SBMLReader()

          const doc_after = reader.readSBMLFromString(serializedSBML)

          expect(doc_after.getNumErrors()).toEqual(0)
          expect(doc_after.isPackageEnabled('comp')).toEqual(true)

          const model_after = doc_after.getModel()

          const model_plugin_after = doc.getModel().findPlugin('comp')
          expect(model_plugin_after.getPackageName()).toEqual('comp')
          const comp_model_plugin_after = libsbml.castObject(model_plugin_after, libsbml.CompModelPlugin)

          expect(comp_model_plugin_after.getNumSubmodels()).toEqual(2)

          expect(comp_model_plugin_after.getSubmodel(0).getId()).toBe('submod1')
          expect(comp_model_plugin_after.getSubmodel(0).getModelRef()).toBe('enzyme')
          expect(comp_model_plugin_after.getSubmodel(1).getId()).toBe('submod2')
          expect(comp_model_plugin_after.getSubmodel(1).getModelRef()).toBe('enzyme')

          const doc_plugin_after = libsbml.castObject(doc.findPlugin('comp'), libsbml.CompSBMLDocumentPlugin)

          expect(doc_plugin_after.getNumModelDefinitions()).toEqual(1)
          const mod_def_after = doc_plugin_after.getModelDefinition(0)
          expect(mod_def_after.getId()).toBe('enzyme')
          expect(mod_def_after.getNumCompartments()).toEqual(1)
          expect(mod_def_after.getNumSpecies()).toEqual(1)

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
