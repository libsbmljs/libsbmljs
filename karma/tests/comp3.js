describe("Comp test 3", function() {
  it('Tests the comp package (3/4)', (done) => {
    libsbml().then((libsbml) => {
        try {
          // create new document
          const doc = new libsbml.SBMLDocument(3,2)

          doc.enablePackage(libsbml.CompExtension.prototype.getXmlnsL3V1V1(), 'comp', true)
          doc.setPackageRequired('comp', true)
          expect(doc.isPackageEnabled('comp')).toEqual(true)

          //Define the external model definition
          const compdoc = libsbml.castObject(doc.findPlugin("comp"), libsbml.CompSBMLDocumentPlugin)
          compdoc.setRequired(true)

          const extmod = compdoc.createExternalModelDefinition()
          extmod.setId("ExtMod1")
          extmod.setSource("enzyme_model.xml")
          extmod.setModelRef("enzyme")

          //Define the 'simple' model
          const mod1 = compdoc.createModelDefinition()
          mod1.setId("simple")

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
          spec.setInitialConcentration(5)

          spec = mod1.createSpecies()
          spec.setCompartment("comp")
          spec.setHasOnlySubstanceUnits(false)
          spec.setConstant(false)
          spec.setBoundaryCondition(false)
          spec.setId("D")
          spec.setInitialConcentration(10)

          const rxn = mod1.createReaction()
          rxn.setReversible(true)
          rxn.setId("J0")

          let sr = rxn.createReactant()
          sr.setConstant(true)
          sr.setStoichiometry(1)
          sr.setSpecies("S")

          sr = rxn.createProduct()
          sr.setConstant(true)
          sr.setStoichiometry(1)
          sr.setSpecies("D")

          const mod1plug = libsbml.castObject(mod1.findPlugin("comp"), libsbml.CompModelPlugin)
          let port = mod1plug.createPort()
          port.setId("S_port")
          port.setIdRef("S")

          const port2 = mod1plug.createPort()
          port2.setId("D_port")
          port2.setIdRef("D")

          const port3 = mod1plug.createPort()
          port3.setId("comp_port")
          port3.setIdRef("comp")

          const port4 = mod1plug.createPort()
          port4.setId("J0_port")
          port4.setIdRef("J0")

          // create the Model
          const model=doc.createModel()
          model.setId("complexified")

          // Set the submodels
          const mplugin = libsbml.castObject(model.findPlugin("comp"), libsbml.CompModelPlugin)

          const submod1 = mplugin.createSubmodel()
          submod1.setId("A")
          submod1.setModelRef("ExtMod1")

          const submod2 = mplugin.createSubmodel()
          submod2.setId("B")
          submod2.setModelRef("simple")

          const del = submod2.createDeletion()
          del.setPortRef("J0_port")

          // Synchronize the compartments
          const mcomp=model.createCompartment()
          mcomp.setSpatialDimensions(3)
          mcomp.setConstant(true)
          mcomp.setId("comp")
          mcomp.setSize(1)
          const compartplug = libsbml.castObject(mcomp.findPlugin("comp"), libsbml.CompSBasePlugin)

          let re = compartplug.createReplacedElement()
          re.setIdRef("comp")
          re.setSubmodelRef("A")

          re = compartplug.createReplacedElement()
          re.setSubmodelRef("B")
          re.unsetIdRef()
          re.setPortRef("comp_port")

          spec = model.createSpecies()
          spec.setCompartment("comp")
          spec.setHasOnlySubstanceUnits(false)
          spec.setConstant(false)
          spec.setBoundaryCondition(false)
          spec.setId("S")
          const S_plugin = libsbml.castObject(spec.findPlugin("comp"), libsbml.CompSBasePlugin)

          const S_re = S_plugin.createReplacedElement()
          S_re.setSubmodelRef("A")
          S_re.setIdRef("S")

          const S_rb = S_plugin.createReplacedBy()
          S_rb.setSubmodelRef("B")
          S_rb.setPortRef("S_port")

          spec = model.createSpecies()
          spec.setCompartment("comp")
          spec.setHasOnlySubstanceUnits(false)
          spec.setConstant(false)
          spec.setBoundaryCondition(false)
          spec.setId("D")
          const D_plugin = libsbml.castObject(spec.findPlugin("comp"), libsbml.CompSBasePlugin)

          const D_re = D_plugin.createReplacedElement()
          D_re.setIdRef("D")
          D_re.setSubmodelRef("A")

          const D_rb = D_plugin.createReplacedBy()
          D_rb.setSubmodelRef("B")
          D_rb.setPortRef("D_port")

          const writer = new libsbml.SBMLWriter()
          const serializedSBML = writer.writeSBMLToString(doc)

          // make sure the expected tags are there
          expect(serializedSBML).toContain('comp:replacedElement')
          expect(serializedSBML).toContain('comp:replacedBy')
          expect(serializedSBML).toContain('comp:listOfModelDefinitions')
          expect(serializedSBML).toContain('comp:modelDefinition')
          expect(serializedSBML).toContain('comp:listOfExternalModelDefinitions')

          const reader = new libsbml.SBMLReader()

          const doc_after = reader.readSBMLFromString(serializedSBML)

          expect(doc_after.getNumErrors()).toEqual(0)
          expect(doc_after.isPackageEnabled('comp')).toEqual(true)

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
