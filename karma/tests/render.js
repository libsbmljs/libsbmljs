describe("Render test", function() {
  it('Tests the render package', (done) => {
    libsbml().then((libsbml) => {
        try {
          // create new document
          const doc = new libsbml.SBMLDocument(3,2)

          doc.enablePackage(libsbml.LayoutExtension.prototype.getXmlnsL3V1V1(), 'layout', true)
          doc.enablePackage(libsbml.RenderExtension.prototype.getXmlnsL3V1V1(), 'render', true)
          doc.setPackageRequired("layout", false)
          doc.setPackageRequired("render", false)
          expect(doc.isPackageEnabled('layout')).toEqual(true)
          expect(doc.isPackageEnabled('render')).toEqual(true)

          const model = doc.createModel()
          model.setId('mymodel')

          const plugin = libsbml.castObject(model.findPlugin("layout"), libsbml.LayoutModelPlugin)

          const layout = plugin.createLayout()
          layout.setId('mylayout')

          const rPlugin = libsbml.castObject(layout.getPlugin("render"), libsbml.RenderLayoutPlugin)

          const rInfo = rPlugin.createLocalRenderInformation()
          rInfo.setId("info")
          rInfo.setName("Example Render Information")
          rInfo.setProgramName("RenderInformation Examples")
          rInfo.setProgramVersion("1.0")

          // add some colors
          let color = rInfo.createColorDefinition()
          color.setId("black")
          color.setColorValue("#000000")

          color = rInfo.createColorDefinition()
          color.setId("silver")
          color.setColorValue("#c0c0c0")

          color = rInfo.createColorDefinition()
          color.setId("white")
          color.setColorValue("#FFFFFF")

          // add a linear gradient from black to white to silver
          const gradient = rInfo.createLinearGradientDefinition()
          gradient.setId("simpleGradient")
          gradient.setPoint1(new libsbml.RelAbsVector(), new libsbml.RelAbsVector())
          gradient.setPoint2(new libsbml.RelAbsVector(0, 100), new libsbml.RelAbsVector(0, 100))

          let stop = gradient.createGradientStop()
          stop.setOffset(new libsbml.RelAbsVector())
          stop.setStopColor("white")

          stop = gradient.createGradientStop()
          stop.setOffset(new libsbml.RelAbsVector(0, 100))
          stop.setStopColor("silver")

          // add a species style that represents them as ellipses with the gradient above
          const style = rInfo.createStyle("ellipseStyle")
          style.getGroup().setFillColor("simpleGradient")
          style.getGroup().setStroke("black")
          style.getGroup().setStrokeWidth(2.0)
          style.addType("SPECIESGLYPH")

          const ellipse = style.getGroup().createEllipse()
          ellipse.setCenter2D(new libsbml.RelAbsVector(0, 50), new libsbml.RelAbsVector(0, 50))
          ellipse.setRadii(new libsbml.RelAbsVector(0, 50), new libsbml.RelAbsVector(0, 50))

          const writer = new libsbml.SBMLWriter()
          const serializedSBML = writer.writeSBMLToString(doc)

          // make sure the expected tags are there
          expect(serializedSBML).toContain('layout:layout')
          expect(serializedSBML).toContain('render:listOfRenderInformation')
          expect(serializedSBML).toContain('render:renderInformation')
          expect(serializedSBML).toContain('render:colorDefinition')
          expect(serializedSBML).toContain('render:linearGradient')

          const reader = new libsbml.SBMLReader()

          const doc_after = reader.readSBMLFromString(serializedSBML)

          expect(doc_after.getNumErrors()).toEqual(0)
          expect(doc_after.isPackageEnabled('layout')).toEqual(true)
          expect(doc_after.isPackageEnabled('render')).toEqual(true)

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
