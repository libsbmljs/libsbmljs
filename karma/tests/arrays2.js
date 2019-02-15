describe("Multi test", function() {
  it('Tests the multi package', (done) => {
    libsbml().then((libsbml) => {
        try {
          // create new document
          const doc = new libsbml.SBMLDocument(3,2)

          doc.enablePackage(libsbml.ArraysExtension.prototype.getXmlnsL3V1V1(), 'arrays', true)
          doc.setPackageRequired("arrays", true)
          expect(doc.isPackageEnabled('arrays')).toEqual(true)

          const model = doc.createModel()

          let p = model.createParameter()
          p.setId("n")
          p.setConstant(true)
          p.setValue(10)

          // second parameter
          p = model.createParameter()
          p.setId("x")
          p.setConstant(false)


          // create the Dimensions via the Plugin
          const arraysPlug = libsbml.castObject(p.findPlugin("arrays"), libsbml.ArraysSBasePlugin)
          const dim = arraysPlug.createDimension()
          dim.setArrayDimension(0)
          dim.setSize("n")

          // third parameter
          p = model.createParameter()
          p.setId("y")
          p.setConstant(true)
          p.setValue(2.3)



          // create the initialAssignment
          const ia = model.createInitialAssignment()
          ia.setSymbol("x")

          const math = new libsbml.ASTNode(libsbml.AST_LINEAR_ALGEBRA_VECTOR)

          const ci1 = new libsbml.ASTNode(libsbml.AST_NAME)
          ci1.setName("y")

          const ci2 = new libsbml.ASTNode(libsbml.AST_INTEGER)
          ci2.setValue(2)

          const c1 = new libsbml.ASTNode(libsbml.AST_FUNCTION_COS)
          const c11 = new libsbml.ASTNode(libsbml.AST_INTEGER)
          c11.setValue(5)
          c1.addChild(c11)

          math.addChild(ci1)
          math.addChild(ci2)
          math.addChild(c1)
          math.setClass("ss")
          ia.setMath(math)

          const writer = new libsbml.SBMLWriter()
          const serializedSBML = writer.writeSBMLToString(doc)

          // make sure the expected tags are there
          expect(serializedSBML).toContain('arrays:listOfDimensions')
          expect(serializedSBML).toContain('arrays:dimension')

          const reader = new libsbml.SBMLReader()

          const doc_after = reader.readSBMLFromString(serializedSBML)

          expect(doc_after.getNumErrors()).toEqual(0)
          expect(doc_after.isPackageEnabled('arrays')).toEqual(true)

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
