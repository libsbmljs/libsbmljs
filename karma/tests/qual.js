describe("Qual test", function() {
  it('Tests the qual package', (done) => {
    libsbml().then((libsbml) => {
        try {
          // create new document
          const doc = new libsbml.SBMLDocument(3,2)

          doc.enablePackage(libsbml.QualExtension.prototype.getXmlnsL3V1V1(), 'qual', true)
          doc.setPackageRequired('qual', true)
          expect(doc.isPackageEnabled('qual')).toEqual(true)

          // create the Model
          const model=doc.createModel()
          model.setId("aggregate")

          const compartment = model.createCompartment()
          compartment.setId("c")
          compartment.setConstant(true)

          //
          // Get a QualModelPlugin object plugged in the model object.
          //
          // The type of the returned value of SBase::getPlugin() function is
          // SBasePlugin*, and thus the value needs to be casted for the
          // corresponding derived class.
          //
          const mplugin = libsbml.castObject(model.findPlugin('qual'), libsbml.QualModelPlugin)

          // create the QualitativeSpecies
          const qs = mplugin.createQualitativeSpecies()
          qs.setId("s1")
          qs.setCompartment("c")
          qs.setConstant(false)
          qs.setInitialLevel(1)
          qs.setMaxLevel(4)
          qs.setName("sss")

          // create the Transition
          const t = mplugin.createTransition()
          t.setId("d")
          t.setSBOTerm(1)

          const i = t.createInput()
          i.setId("RD")
          i.setQualitativeSpecies("s1")
          i.setTransitionEffect(libsbml.INPUT_TRANSITION_EFFECT_NONE)
          i.setSign(libsbml.INPUT_SIGN_NEGATIVE)
          i.setThresholdLevel(2)
          i.setName("aa")

          const o = t.createOutput()
          o.setId("wd")
          o.setQualitativeSpecies("s1")
          o.setTransitionEffect(libsbml.OUTPUT_TRANSITION_EFFECT_PRODUCTION)
          o.setOutputLevel(2)
          o.setName("aa")

          const dt = t.createDefaultTerm()
          dt.setResultLevel(2)

          const ft = t.createFunctionTerm()
          const parser = new libsbml.SBMLFormulaParser()
          const math = parser.parseL3Formula("geq(s1, 2)")
          ft.setResultLevel(1)
          ft.setMath(math)

          const writer = new libsbml.SBMLWriter()
          const serializedSBML = writer.writeSBMLToString(doc)

          // make sure the expected tags are there
          expect(serializedSBML).toContain('qual:listOfQualitativeSpecies')
          expect(serializedSBML).toContain('qual:qualitativeSpecies')
          expect(serializedSBML).toContain('qual:listOfTransitions')
          expect(serializedSBML).toContain('qual:transition')
          expect(serializedSBML).toContain('qual:input')
          expect(serializedSBML).toContain('qual:output')

          const reader = new libsbml.SBMLReader()

          const doc_after = reader.readSBMLFromString(serializedSBML)

          expect(doc_after.getNumErrors()).toEqual(0)
          expect(doc_after.isPackageEnabled('qual')).toEqual(true)

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
