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

          let c = model.createCompartment()
          c.setId("membrane")
          c.setConstant(true)

          // set the multi attribute isType via the compartmentPlugin
          let compPlug = libsbml.castObject(c.findPlugin("multi"), libsbml.MultiCompartmentPlugin)
          compPlug.setIsType(true)

          c = model.createCompartment()
          c.setId("inter_membrane")
          c.setConstant(true)
          compPlug = libsbml.castObject(c.findPlugin("multi"), libsbml.MultiCompartmentPlugin)
          compPlug.setIsType(true)

          // create species
          const s = model.createSpecies()
          s.setId("s1")
          s.setCompartment("membrane")
          s.setBoundaryCondition(false)
          s.setHasOnlySubstanceUnits(false)
          s.setConstant(false)

          // create reaction
          const r = model.createReaction()
          r.setId("r1")
          r.setReversible(false)

          // createReactant
          const sr = r.createReactant()
          sr.setId("sr1")
          sr.setSpecies("s1")
          sr.setConstant(false)

          const kl = r.createKineticLaw()

          const ci = new libsbml.ASTNode(libsbml.AST_NAME)
          ci.setName("s1")
          const astPlugin = libsbml.castObject(ci.getPlugin("multi"), libsbml.MultiASTPlugin)
          astPlugin.setSpeciesReference("r1")

          const ci1 = new libsbml.ASTNode(libsbml.AST_NAME)
          const astPlugin1 = libsbml.castObject(ci1.getPlugin("multi"), libsbml.MultiASTPlugin)
          astPlugin1.setRepresentationType("sum")
          ci1.setName("s1")

          const math = new libsbml.ASTNode(libsbml.AST_TIMES)
          math.addChild(ci)
          math.addChild(ci1)

          kl.setMath(math)

          const writer = new libsbml.SBMLWriter()
          const serializedSBML = writer.writeSBMLToString(doc)

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
