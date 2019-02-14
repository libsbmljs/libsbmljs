describe("FBC test", function() {
  it('Tests the groups package', (done) => {
    libsbml().then((libsbml) => {
        try {
          // create new document
          const doc = new libsbml.SBMLDocument(3,2)

          doc.enablePackage(libsbml.MultiExtension.prototype.getXmlnsL3V1V1(), 'multi', true)
          doc.setPackageRequired("multi", true)
          expect(doc.isPackageEnabled('multi')).toEqual(true)

          const model = doc.createModel()

          const c = model.createCompartment()
          c.setId("membrane")
          c.setConstant(true)

          // set the multi attribute isType via the compartmentPlugin
          const compPlug = libsbml.castObject(c.findPlugin("multi"), libsbml.MultiCompartmentPlugin)
          compPlug.setIsType(true)

          // create the speciesTypes
          const modelPlug = libsbml.castObject(model.findPlugin("multi"), libsbml.MultiModelPlugin)

          const st = modelPlug.createMultiSpeciesType()
          st.setId("stX")
          st.setCompartment("membrane")

          // create species
          const s = model.createSpecies()
          s.setId("s1")
          s.setCompartment("membrane")
          s.setBoundaryCondition(false)
          s.setHasOnlySubstanceUnits(false)
          s.setConstant(false)

          // set the multi attribute speciesType via the compartmentPlugin
          const spPlug = libsbml.castObject(s.findPlugin("multi"), libsbml.MultiSpeciesPlugin)
          spPlug.setSpeciesType("stX")

          // create species feature
          const sf = spPlug.createSpeciesFeature()
          sf.setSpeciesFeatureType("a")
          sf.setOccur(1)
          sf.setComponent("b")

          const sfv = sf.createSpeciesFeatureValue()
          sfv.setValue("c")

          // create a subListOfSpeciesFeatures
          let subloSF = spPlug.createSubListOfSpeciesFeatures()
          subloSF.setRelation(libsbml.MULTI_RELATION_AND)

          // add speciesFeatures to the subList
          let sf1 = new libsbml.SpeciesFeature(3, 1, 1)
          sf1.setSpeciesFeatureType("a1")
          sf1.setOccur(1)
          sf1.setComponent("b1")

          let sfv1 = sf1.createSpeciesFeatureValue()
          sfv1.setValue("c1")

          subloSF.appendAndOwn(sf1)

          sf1 = new libsbml.SpeciesFeature(3, 1, 1)
          sf1.setSpeciesFeatureType("a2")
          sf1.setOccur(1)
          sf1.setComponent("b2")

          sfv1 = sf1.createSpeciesFeatureValue()
          sfv1.setValue("c2")

          subloSF.appendAndOwn(sf1)

          // create a second subListOfSpeciesfeatures
          subloSF = spPlug.createSubListOfSpeciesFeatures()
          subloSF.setRelation(libsbml.MULTI_RELATION_OR)

          sf1 = new libsbml.SpeciesFeature(3, 1, 1)
          sf1.setSpeciesFeatureType("a3")
          sf1.setOccur(1)
          sf1.setComponent("b3")

          sfv1 = sf1.createSpeciesFeatureValue()
          sfv1.setValue("c3")

          subloSF.appendAndOwn(sf1)

          sf1 = new libsbml.SpeciesFeature(3, 1, 1)
          sf1.setSpeciesFeatureType("a4")
          sf1.setOccur(1)
          sf1.setComponent("b4")

          sfv1 = sf1.createSpeciesFeatureValue()
          sfv1.setValue("c4")

          subloSF.appendAndOwn(sf1)

          const writer = new libsbml.SBMLWriter()
          const serializedSBML = writer.writeSBMLToString(doc)

          // make sure the expected tags are there
          expect(serializedSBML).toContain('multi:listOfSpeciesFeatures')
          expect(serializedSBML).toContain('multi:speciesFeature')
          expect(serializedSBML).toContain('multi:speciesFeatureValue')
          expect(serializedSBML).toContain('multi:listOfSpeciesFeatureValues')

          const reader = new libsbml.SBMLReader()

          const doc_after = reader.readSBMLFromString(serializedSBML)

          expect(doc_after.getNumErrors()).toEqual(0)
          expect(doc_after.isPackageEnabled('multi')).toEqual(true)

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
