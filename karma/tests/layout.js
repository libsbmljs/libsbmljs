describe("Layout test", function() {
  it('Tests reading layout info', (done) => {
    libsbml().then((libsbml) => {
      try {
        const reader = new libsbml.SBMLReader()
        libsbml.readSBMLFromURL('base/karma/models/layout-glycolysis.xml').then((doc) => {
          // read with no errors
          expect(doc.getNumErrors()).toEqual(0)

          // check reactions
          expect(doc.getModel().reactions.length).toEqual(11)

          // check plugins
    //       console.log('layout supported:')
    //       console.log((new libsbml.Capabilities()).isLayoutSupported())
    //       console.log('num plugins:')
    //       console.log(doc.getNumPlugins())
    //       console.log('plugins:')
    //       doc.plugins.forEach(function(x) {
    //         console.log(x.getPackageName())
    //       })
          expect(doc.getModel().hasPlugin('layout')).toEqual(true)
          const plugin = doc.getModel().findPlugin('layout')
          expect(plugin.getPackageName()).toEqual('layout')
          // const layoutplugin = plugin.asLayout()
          const layoutplugin = libsbml.castObject(plugin, libsbml.LayoutModelPlugin)
          expect(layoutplugin.layouts.length).toEqual(1)

          const layout = layoutplugin.layouts[0]

          // test species glyphs
          expect(layout.compglyphs.length).toEqual(0)
          expect(layout.specglyphs.length).toEqual(23)
          expect(layout.specglyphs[0].getId()).toEqual('sGlyph_0')
          expect(layout.specglyphs[0].getBoundingBox().getPosition().x()).toEqual(280)
          expect(layout.specglyphs[0].getBoundingBox().getPosition().y()).toEqual(84)
          expect(layout.specglyphs[0].getBoundingBox().getDimensions().getWidth()).toEqual(54)
          expect(layout.specglyphs[0].getBoundingBox().width).toEqual(54)
          expect(layout.specglyphs[0].getBoundingBox().getDimensions().getHeight()).toEqual(24)
          expect(layout.specglyphs[0].getBoundingBox().height).toEqual(24)
          expect(layout.specglyphs[0].getBoundingBox().getDimensions().getDepth()).toEqual(0)
          expect(layout.specglyphs[0].getBoundingBox().depth).toEqual(0)

          expect(layout.specglyphs[1].getId()).toEqual('sGlyph_1')
          expect(layout.specglyphs[1].getBoundingBox().getPosition().x()).toEqual(293)
          expect(layout.specglyphs[1].getBoundingBox().getPosition().y()).toEqual(202)
          expect(layout.specglyphs[1].getBoundingBox().width).toEqual(150)
          expect(layout.specglyphs[1].getBoundingBox().height).toEqual(24)
          expect(layout.specglyphs[1].getBoundingBox().depth).toEqual(0)

          expect(layout.specglyphs[14].getId()).toEqual('sGlyph_14')
          expect(layout.specglyphs[14].getBoundingBox().getPosition().x()).toEqual(574)
          expect(layout.specglyphs[14].getBoundingBox().getPosition().y()).toEqual(777)
          expect(layout.specglyphs[14].getBoundingBox().width).toEqual(34)
          expect(layout.specglyphs[14].getBoundingBox().height).toEqual(24)
          expect(layout.specglyphs[14].getBoundingBox().depth).toEqual(0)

          expect(layout.specglyphs[15].getId()).toEqual('sGlyph_7_alias_0')
          expect(layout.specglyphs[15].getBoundingBox().getPosition().x()).toEqual(486)
          expect(layout.specglyphs[15].getBoundingBox().getPosition().y()).toEqual(530)
          expect(layout.specglyphs[15].getBoundingBox().width).toEqual(34)
          expect(layout.specglyphs[15].getBoundingBox().height).toEqual(24)
          expect(layout.specglyphs[15].getBoundingBox().depth).toEqual(0)

          expect(layout.specglyphs[16].getId()).toEqual('sGlyph_7_alias_1')
          expect(layout.specglyphs[16].getBoundingBox().getPosition().x()).toEqual(486)
          expect(layout.specglyphs[16].getBoundingBox().getPosition().y()).toEqual(415)
          expect(layout.specglyphs[16].getBoundingBox().width).toEqual(34)
          expect(layout.specglyphs[16].getBoundingBox().height).toEqual(24)
          expect(layout.specglyphs[16].getBoundingBox().depth).toEqual(0)

          expect(layout.specglyphs[layout.specglyphs.length-1].getId()).toEqual('sGlyph_10_alias_7')
          expect(layout.specglyphs[layout.specglyphs.length-1].getBoundingBox().getPosition().x()).toEqual(228)
          expect(layout.specglyphs[layout.specglyphs.length-1].getBoundingBox().getPosition().y()).toEqual(397)
          expect(layout.specglyphs[layout.specglyphs.length-1].getBoundingBox().width).toEqual(43)
          expect(layout.specglyphs[layout.specglyphs.length-1].getBoundingBox().height).toEqual(24)
          expect(layout.specglyphs[layout.specglyphs.length-1].getBoundingBox().depth).toEqual(0)

          // test reaction glyphs
          expect(layout.rxnglyphs.length).toEqual(11)
          expect(layout.rxnglyphs[0].getId()).toEqual('rGlyph_0')
          expect(layout.rxnglyphs[0].getReactionId()).toEqual('J0')
          expect(layout.rxnglyphs[0].specref.length).toEqual(2)
          expect(layout.rxnglyphs[0].specref[0].isSetCurve()).toEqual(true)
          expect(layout.rxnglyphs[0].specref[0].getCurve().segments.length).toEqual(1)
          expect(layout.rxnglyphs[0].specref[0].getCurve().segments[0].isCubicBezier()).toEqual(true)
          expect(layout.rxnglyphs[0].specref[0].getCurve().segments[0].getStart().x()).toEqual(225)
          expect(layout.rxnglyphs[0].specref[0].getCurve().segments[0].getStart().y()).toEqual(85.4117647058823)
          expect(layout.rxnglyphs[0].specref[0].getCurve().segments[0].getEnd().x()).toEqual(273)
          expect(layout.rxnglyphs[0].specref[0].getCurve().segments[0].getEnd().y()).toEqual(94.2)
          expect(layout.rxnglyphs[0].specref[0].getCurve().segments[0].getBasePoint1().x()).toEqual(246)
          expect(layout.rxnglyphs[0].specref[0].getCurve().segments[0].getBasePoint1().y()).toEqual(91)
          expect(layout.rxnglyphs[0].specref[0].getCurve().segments[0].getBasePoint2().x()).toEqual(247)
          expect(layout.rxnglyphs[0].specref[0].getCurve().segments[0].getBasePoint2().y()).toEqual(92)

          expect(layout.rxnglyphs[layout.rxnglyphs.length-1].getId()).toEqual('rGlyph_10')
          expect(layout.rxnglyphs[layout.rxnglyphs.length-1].getReactionId()).toEqual('J10')
          expect(layout.rxnglyphs[layout.rxnglyphs.length-1].specref.length).toEqual(2)
          expect(layout.rxnglyphs[layout.rxnglyphs.length-1].specref[0].getId()).toEqual('SpeciesReference_J10_0')
          expect(layout.rxnglyphs[layout.rxnglyphs.length-1].specref[0].isSetCurve()).toEqual(true)
          expect(layout.rxnglyphs[layout.rxnglyphs.length-1].specref[0].getCurve().segments.length).toEqual(1)
          expect(layout.rxnglyphs[layout.rxnglyphs.length-1].specref[0].getCurve().segments[0].isCubicBezier()).toEqual(true)
          expect(layout.rxnglyphs[layout.rxnglyphs.length-1].specref[0].getCurve().segments[0].getStart().x()).toEqual(518.545454545455)
          expect(layout.rxnglyphs[layout.rxnglyphs.length-1].specref[0].getCurve().segments[0].getStart().y()).toEqual(749)
          expect(layout.rxnglyphs[layout.rxnglyphs.length-1].specref[0].getCurve().segments[0].getEnd().x()).toEqual(568)
          expect(layout.rxnglyphs[layout.rxnglyphs.length-1].specref[0].getCurve().segments[0].getEnd().y()).toEqual(776.491525423729)
          expect(layout.rxnglyphs[layout.rxnglyphs.length-1].specref[0].getCurve().segments[0].getBasePoint1().x()).toEqual(532)
          expect(layout.rxnglyphs[layout.rxnglyphs.length-1].specref[0].getCurve().segments[0].getBasePoint1().y()).toEqual(756)
          expect(layout.rxnglyphs[layout.rxnglyphs.length-1].specref[0].getCurve().segments[0].getBasePoint2().x()).toEqual(532)
          expect(layout.rxnglyphs[layout.rxnglyphs.length-1].specref[0].getCurve().segments[0].getBasePoint2().y()).toEqual(756)

          // test text glyphs
          expect(layout.txtglyphs.length).toEqual(23)

          expect(layout.txtglyphs[0].getBoundingBox().x).toEqual(280)
          expect(layout.txtglyphs[0].getBoundingBox().y).toEqual(84)
          expect(layout.txtglyphs[0].getBoundingBox().width).toEqual(54)
          expect(layout.txtglyphs[0].getBoundingBox().height).toEqual(24)

          libsbml.destroy(doc)
        } catch(error) {
          fail(error)
          console.log(error.stack)
        } finally {
          done()
        }
      })
    })
  })
})
