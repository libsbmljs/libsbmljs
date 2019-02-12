describe("Comp test 2", function() {
  it('Tests the comp package (2/4)', (done) => {
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
          const spp = libsbml.castObject(spec.findPlugin("comp"), libsbml.CompSBasePlugin)

          const re3 = spp.createReplacedElement()
          re3.setIdRef("S")
          re3.setSubmodelRef("A")

          const re4 = spp.createReplacedElement()
          re4.setIdRef("S")
          re4.setSubmodelRef("B")

          const writer = new libsbml.SBMLWriter()
          const serializedSBML = writer.writeSBMLToString(doc)

          // make sure the expected tags are there
          expect(serializedSBML).toContain('comp:listOfReplacedElements')
          expect(serializedSBML).toContain('comp:replacedElement')
          expect(serializedSBML).toContain('comp:listOfSubmodels')
          expect(serializedSBML).toContain('comp:submodel')

          const reader = new libsbml.SBMLReader()

          const doc_after = reader.readSBMLFromString(serializedSBML)

          expect(doc_after.getNumErrors()).toEqual(0)
          expect(doc_after.isPackageEnabled('comp')).toEqual(true)

          const model_after = doc_after.getModel()
          const compartment_plugin_after = libsbml.castObject(doc.getModel().getCompartment(0).findPlugin('comp'), libsbml.CompSBasePlugin)

          expect(compartment_plugin_after.getNumReplacedElements()).toEqual(2)
          expect(compartment_plugin_after.getReplacedElement(0).getIdRef()).toBe('comp')
          expect(compartment_plugin_after.getReplacedElement(0).getSubmodelRef()).toBe('A')
          expect(compartment_plugin_after.getReplacedElement(1).getIdRef()).toBe('comp')
          expect(compartment_plugin_after.getReplacedElement(1).getSubmodelRef()).toBe('B')

          const model_plugin_after = libsbml.castObject(doc.getModel().findPlugin('comp'), libsbml.CompModelPlugin)
          expect(model_plugin_after.getNumSubmodels()).toEqual(2)

          expect(model_plugin_after.getSubmodel(0).getId()).toBe('A')
          expect(model_plugin_after.getSubmodel(0).getModelRef()).toBe('ExtMod1')
          expect(model_plugin_after.getSubmodel(1).getId()).toBe('B')
          expect(model_plugin_after.getSubmodel(1).getModelRef()).toBe('ExtMod1')

          const species_plugin_after = libsbml.castObject(doc.getModel().getSpecies(0).findPlugin('comp'), libsbml.CompSBasePlugin)

          expect(species_plugin_after.getNumReplacedElements()).toEqual(2)
          expect(species_plugin_after.getReplacedElement(0).getIdRef()).toBe('S')
          expect(species_plugin_after.getReplacedElement(0).getSubmodelRef()).toBe('A')
          expect(species_plugin_after.getReplacedElement(1).getIdRef()).toBe('S')
          expect(species_plugin_after.getReplacedElement(1).getSubmodelRef()).toBe('B')

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
