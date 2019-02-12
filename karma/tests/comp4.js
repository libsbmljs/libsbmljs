describe("Comp test 1", function() {
  it('Tests the comp package', (done) => {
    libsbml().then((libsbml) => {
        try {
          // create new document
          const doc = new libsbml.SBMLDocument(3,2)

          doc.enablePackage(libsbml.CompExtension.prototype.getXmlnsL3V1V1(), 'comp', true)
          doc.setPackageRequired('comp', true)
          expect(doc.isPackageEnabled('comp')).toEqual(true)

          const compdoc = libsbml.castObject(doc.findPlugin("comp"), libsbml.CompSBMLDocumentPlugin)
          // create the 'enzyme' model definition
          const mod1 = compdoc.createModelDefinition()
          mod1.setId("enzyme")
          mod1.setName("enzyme")

          const comp=mod1.createCompartment()
          comp.setSpatialDimensions(3)
          comp.setConstant(true)
          comp.setId("comp")
          comp.setSize(1)

          // We have to construct it this way because we get the
          // comp plugin from it later.
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

          const rxn = mod1.createReaction()
          rxn.setReversible(true)
          rxn.setId("J0")

          const rxn2 = mod1.createReaction()
          rxn2.setReversible(true)
          rxn2.setId("J1")

          let sr = rxn.createReactant()
          sr.setConstant(true)
          sr.setStoichiometry(1)
          sr.setSpecies("S")

          sr = rxn.createReactant()
          sr.setConstant(true)
          sr.setStoichiometry(1)
          sr.setSpecies("E")

          sr = rxn2.createProduct()
          sr.setConstant(true)
          sr.setStoichiometry(1)
          sr.setSpecies("E")

          sr = rxn.createProduct()
          sr.setConstant(true)
          sr.setStoichiometry(1)
          sr.setSpecies("ES")

          sr = rxn2.createReactant()
          sr.setConstant(true)
          sr.setStoichiometry(1)
          sr.setSpecies("ES")

          sr = rxn2.createProduct()
          sr.setConstant(true)
          sr.setStoichiometry(1)
          sr.setSpecies("D")

          const mod1plug = libsbml.castObject(mod1.findPlugin("comp"), libsbml.CompModelPlugin)

          let m1port = mod1plug.createPort()
          m1port.setIdRef("comp")
          m1port.setId("comp_port")

          m1port = mod1plug.createPort()
          m1port.setIdRef("S")
          m1port.setId("S_port")

          m1port = mod1plug.createPort()
          m1port.setIdRef("E")
          m1port.setId("E_port")

          m1port = mod1plug.createPort()
          m1port.setIdRef("D")
          m1port.setId("D_port")

          m1port = mod1plug.createPort()
          m1port.setIdRef("ES")
          m1port.setId("ES_port")

          m1port = mod1plug.createPort()
          m1port.setIdRef("J0")
          m1port.setId("J0_port")

          m1port = mod1plug.createPort()
          m1port.setIdRef("J1")
          m1port.setId("J1_port")

          //Create the 'simple' model definition
          const mod2 = compdoc.createModelDefinition()
          mod2.setId("simple")

          const comp2=mod2.createCompartment()
          comp2.setSpatialDimensions(3)
          comp2.setConstant(true)
          comp2.setId("comp")
          comp2.setSize(1)

          spec = mod2.createSpecies()
          spec.setCompartment("comp")
          spec.setHasOnlySubstanceUnits(false)
          spec.setConstant(false)
          spec.setBoundaryCondition(false)
          spec.setId("S")
          spec.setInitialConcentration(5)

          spec = mod2.createSpecies()
          spec.setCompartment("comp")
          spec.setHasOnlySubstanceUnits(false)
          spec.setConstant(false)
          spec.setBoundaryCondition(false)
          spec.setId("D")
          spec.setInitialConcentration(10)

          // We have to construct it this way because we get the
          // comp plugin from it later.
          const rxn3 = mod2.createReaction()
          rxn3.setReversible(true)
          rxn3.setId("J0")

          let sr2 = rxn3.createReactant()
          sr2.setConstant(true)
          sr2.setStoichiometry(1)
          sr2.setSpecies("S")

          sr2 = rxn3.createProduct()
          sr2.setConstant(true)
          sr2.setStoichiometry(1)
          sr2.setSpecies("D")

          const mod2plug = libsbml.castObject(mod2.findPlugin("comp"), libsbml.CompModelPlugin)

          let port = mod2plug.createPort()
          port.setId("S_port")
          port.setIdRef("S")

          port = mod2plug.createPort()
          port.setId("D_port")
          port.setIdRef("D")

          port = mod2plug.createPort()
          port.setId("comp_port")
          port.setIdRef("comp")

          port = mod2plug.createPort()
          port.setId("J0_port")
          port.setIdRef("J0")

          // create the main Model
          const model=doc.createModel()
          model.setId("complexified")

          // Set the submodels
          const mplugin = libsbml.castObject(model.findPlugin("comp"), libsbml.CompModelPlugin)

          const submod1 = mplugin.createSubmodel()
          submod1.setId("A")
          submod1.setModelRef("enzyme")

          const submod2 = mplugin.createSubmodel()
          submod2.setId("B")
          submod2.setModelRef("simple")

          const del = submod2.createDeletion()
          del.setPortRef("J0_port")
          del.setId("oldrxn")

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
          re.setPortRef("comp_port")

          spec = model.createSpecies()
          spec.setCompartment("comp")
          spec.setHasOnlySubstanceUnits(false)
          spec.setConstant(false)
          spec.setBoundaryCondition(false)
          spec.setId("S")
          let specplug = libsbml.castObject(spec.findPlugin("comp"), libsbml.CompSBasePlugin)

          let sre = specplug.createReplacedElement()
          sre.setSubmodelRef("A")
          sre.setIdRef("S")

          let srb = specplug.createReplacedBy()
          srb.setSubmodelRef("B")
          srb.setPortRef("S_port")

          spec = model.createSpecies()
          spec.setCompartment("comp")
          spec.setHasOnlySubstanceUnits(false)
          spec.setConstant(false)
          spec.setBoundaryCondition(false)
          spec.setId("D")
          specplug = libsbml.castObject(spec.findPlugin("comp"), libsbml.CompSBasePlugin)

          sre = specplug.createReplacedElement()
          sre.setSubmodelRef("A")
          sre.setIdRef("D")

          srb = specplug.createReplacedBy()
          srb.setSubmodelRef("B")
          srb.setPortRef("D_port")

          //Synchronize the reactions
          let blankrxn = model.createReaction()
          blankrxn.setId("J0")
          blankrxn.setReversible(true)

          let sr3 = blankrxn.createReactant()
          sr3.setConstant(true)
          sr3.setStoichiometry(1)
          sr3.setSpecies("S")

          let blankrxnplug = libsbml.castObject(blankrxn.findPlugin("comp"), libsbml.CompSBasePlugin)

          const deletion = blankrxnplug.createReplacedElement()
          deletion.setDeletion("oldrxn")
          deletion.setSubmodelRef("B")

          let rb2 = blankrxnplug.createReplacedBy()
          rb2.setSubmodelRef("A")
          rb2.setPortRef("J0_port")

          blankrxn = model.createReaction()
          blankrxn.setReversible(true)
          blankrxn.setId("J1")
          blankrxnplug = libsbml.castObject(blankrxn.findPlugin("comp"), libsbml.CompSBasePlugin)

          sr3 = blankrxn.createProduct()
          sr3.setConstant(true)
          sr3.setStoichiometry(1)
          sr3.setSpecies("D")

          rb2 = blankrxnplug.createReplacedBy()
          rb2.setSubmodelRef("A")
          rb2.setPortRef("J1_port")

          const writer = new libsbml.SBMLWriter()
          const serializedSBML = writer.writeSBMLToString(doc)

          // make sure the expected tags are there
          // expect(serializedSBML).toContain('comp:replacedElement')

          const reader = new libsbml.SBMLReader()

          const doc_after = reader.readSBMLFromString(serializedSBML)

          console.log(doc_after.getError(0).getMessage())
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
