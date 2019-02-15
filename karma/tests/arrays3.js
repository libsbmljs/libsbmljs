describe("Arrays test", function() {
  it('Tests the arrays package (3/3)', (done) => {
    libsbml().then((libsbml) => {
        try {
          // create new document
          const doc = new libsbml.SBMLDocument(3,2)

          doc.enablePackage(libsbml.ArraysExtension.prototype.getXmlnsL3V1V1(), 'arrays', true)
          doc.setPackageRequired("arrays", true)
          expect(doc.isPackageEnabled('arrays')).toEqual(true)

          const model = doc.createModel()

          // create the parameters

          // first parameter - for dimension m
          let p = model.createParameter()
          p.setId("m")
          p.setConstant(true)
          p.setValue(2)

          // second parameter - for dimension n
          p = model.createParameter()
          p.setId("n")
          p.setConstant(true)
          p.setValue(1)

          // third parameter - 2 x 1 matrix of parameters
          p = model.createParameter()
          p.setId("x")
          p.setConstant(false)


          // create the Dimensions via the Plugin
          const arraysPlug = libsbml.castObject(p.findPlugin("arrays"), libsbml.ArraysSBasePlugin)

          // first dimension
          let dim = arraysPlug.createDimension()
          dim.setArrayDimension(0)
          dim.setSize("m")

          // second dimension
          dim = arraysPlug.createDimension()
          dim.setArrayDimension(1)
          dim.setSize("n")

          // other parameters
          p = model.createParameter()
          p.setId("y")
          p.setConstant(true)
          p.setValue(2.3)



          // create the initialAssignment
          const ia = model.createInitialAssignment()
          ia.setSymbol("x")

          const row1 = new libsbml.ASTNode(libsbml.AST_LINEAR_ALGEBRA_VECTOR)

          const ci1 = new libsbml.ASTNode(libsbml.AST_NAME)
          ci1.setName("y")

          row1.addChild(ci1)

          const row2 = new libsbml.ASTNode(libsbml.AST_LINEAR_ALGEBRA_VECTOR)

          const ci2 = new libsbml.ASTNode(libsbml.AST_INTEGER)
          ci2.setValue(2)

          row2.addChild(ci2)

          const math = new libsbml.ASTNode(libsbml.AST_LINEAR_ALGEBRA_VECTOR)

          math.addChild(row1)
          math.addChild(row2)

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
