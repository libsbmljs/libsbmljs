describe("Comp test 1", function() {
  it('Tests the comp package', (done) => {
    libsbml().then((libsbml) => {
        try {
          // create new document
          const doc = new libsbml.SBMLDocument(3,2)

          doc.enablePackage(libsbml.CompExtension.prototype.getXmlnsL3V1V1(), 'comp', true)
          doc.setPackageRequired('comp', true)
          expect(doc.isPackageEnabled('comp')).toEqual(true)

          // create the Model
          const model=doc.createModel()
          model.setId("aggregate")

          // Set the submodels
          const model_plugin = doc.getModel().findPlugin('comp')
          expect(model_plugin.getPackageName()).toEqual('comp')
          const comp_model_plugin = libsbml.castObject(model_plugin, libsbml.CompModelPlugin)

          const submod1 = comp_model_plugin.createSubmodel()
          submod1.setId("A")
          submod1.setModelRef("ExtMod1")

          const submod2 = comp_model_plugin.createSubmodel()
          submod2.setId("B")
          submod2.setModelRef("ExtMod1")

          // create a replacement compartment
          const comp=model.createCompartment()
          comp.setSpatialDimensions(3)
          comp.setConstant(true)
          comp.setId("comp")
          comp.setSize(1)

          //Tell the model that this compartment replaces both of the inside ones.
          const compartplug = libsbml.castObject(comp.findPlugin("comp"), libsbml.CompSBasePlugin)

          const re1 = compartplug.createReplacedElement()
          re1.setIdRef("comp")
          re1.setSubmodelRef("A")

          const re2 = compartplug.createReplacedElement()
          re2.setIdRef("comp")
          re2.setSubmodelRef("B")

          // create a replacement species
          const spec = model.createSpecies()
          spec.setCompartment("comp")
          spec.setHasOnlySubstanceUnits(false)
          spec.setConstant(false)
          spec.setBoundaryCondition(false)
          spec.setId("S")

          //Tell the model that this species replaces both of the inside ones.
          const spp = libsbml.castObject(comp.findPlugin("comp"), libsbml.CompSBasePlugin)

          const re3 = spp.createReplacedElement()
          re3.setIdRef("S")
          re3.setSubmodelRef("A")

          const re4 = spp.createReplacedElement()
          re4.setIdRef("S")
          re4.setSubmodelRef("B")

          const writer = new libsbml.SBMLWriter()
          const serializedSBML = writer.writeSBMLToString(doc)

          // make sure the expected tags are there
          // expect(serializedSBML).toContain('comp:listOfModelDefinitions')

          const reader = new libsbml.SBMLReader()

          const doc_after = reader.readSBMLFromString(serializedSBML)

          expect(doc_after.getNumErrors()).toEqual(0)
          expect(doc_after.isPackageEnabled('comp')).toEqual(true)

          const model_after = doc_after.getModel()

          const model_plugin_after = doc.getModel().findPlugin('comp')
          expect(model_plugin_after.getPackageName()).toEqual('comp')
          const comp_model_plugin_after = libsbml.castObject(model_plugin_after, libsbml.CompModelPlugin)

          // expect(comp_model_plugin_after.getNumSubmodels()).toEqual(2)
          //
          // expect(comp_model_plugin_after.getSubmodel(0).getId()).toBe('submod1')
          // expect(comp_model_plugin_after.getSubmodel(0).getModelRef()).toBe('enzyme')
          // expect(comp_model_plugin_after.getSubmodel(1).getId()).toBe('submod2')
          // expect(comp_model_plugin_after.getSubmodel(1).getModelRef()).toBe('enzyme')

          const doc_plugin_after = libsbml.castObject(doc.findPlugin('comp'), libsbml.CompSBMLDocumentPlugin)

          // expect(doc_plugin_after.getNumModelDefinitions()).toEqual(1)
          // const mod_def_after = doc_plugin_after.getModelDefinition(0)
          // expect(mod_def_after.getId()).toBe('enzyme')
          // expect(mod_def_after.getNumCompartments()).toEqual(1)
          // expect(mod_def_after.getNumSpecies()).toEqual(4)

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
