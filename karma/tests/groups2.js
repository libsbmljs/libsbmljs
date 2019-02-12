describe("FBC test", function() {
  it('Tests the groups package', (done) => {
    libsbml().then((libsbml) => {
        try {
          // create new document
          const doc = new libsbml.SBMLDocument(3,2)

          doc.enablePackage(libsbml.GroupsExtension.prototype.getXmlnsL3V1V1(), 'groups', true)
          doc.enablePackage(libsbml.LayoutExtension.prototype.getXmlnsL3V1V1(), 'layout', true)
          doc.setPackageRequired("groups", false)
          doc.setPackageRequired("layout", false)
          expect(doc.isPackageEnabled('groups')).toEqual(true)
          expect(doc.isPackageEnabled('layout')).toEqual(true)

          const model = doc.createModel()
          model.setId('TestModel')

          let compartment = model.createCompartment()
          compartment.setId("Compartment_1")
          compartment.setConstant(true)

          compartment=model.createCompartment()
          compartment.setId("mitochon")
          compartment.setConstant(true)

          // create the Species

          const species1 = model.createSpecies()
          species1.setId("Species_1")
          species1.setCompartment("Compartment_1")
          species1.setInitialConcentration(1)
          species1.setHasOnlySubstanceUnits(false)
          species1.setBoundaryCondition(false)
          species1.setConstant(false)

          const species2 = model.createSpecies()
          species2.setId("Species_2")
          species2.setCompartment("Compartment_1")
          species2.setInitialConcentration(2)
          species2.setHasOnlySubstanceUnits(false)
          species2.setBoundaryCondition(false)
          species2.setConstant(false)

          const reaction1=model.createReaction()
          reaction1.setId("Reaction_1")
          reaction1.setReversible(false)

          const reference1=reaction1.createReactant()
          reference1.setSpecies(species1.getId())
          reference1.setId("SpeciesReference_1")
          reference1.setConstant(false)

          const reference2=reaction1.createProduct()
          reference2.setSpecies(species2.getId())
          reference2.setId("SpeciesReference_2")
          reference2.setConstant(false)

          const reaction2=model.createReaction()
          reaction2.setId("Reaction_2")
          reaction2.setReversible(false)


          const reference3=reaction2.createReactant()
          reference3.setSpecies(species2.getId())
          reference3.setId("SpeciesReference_3")
          reference3.setConstant(false)

          const reference4=reaction2.createProduct()
          reference4.setSpecies(species1.getId())
          reference4.setId("SpeciesReference_4")
          reference4.setConstant(false)


          // create the Layout

          const layoutns = new libsbml.LayoutPkgNamespaces(3,1,1)

          //
          // The type of the returned value of SBase::getPlugin() function is SBasePlugin*, and
          // thus the value needs to be casted for the corresponding derived class.
          //
          const mpluginLayout = libsbml.castObject(model.findPlugin("layout"), libsbml.LayoutModelPlugin)
          const layout=mpluginLayout.createLayout()

          layout.setId("Layout_1")
          const dim = new libsbml.Dimensions(layoutns, 400.0,220.0,0)
          layout.setDimensions(dim)


          // create the CompartmentGlyph

          const compartmentGlyph=layout.createCompartmentGlyph()
          compartmentGlyph.setId("CompartmentGlyph_1")
          compartmentGlyph.setCompartmentId(compartment.getId())
          let bb = new libsbml.BoundingBox(layoutns, "bb1",5,5,390,210)
          compartmentGlyph.setBoundingBox(bb)


          // create the SpeciesGlyphs

          const speciesGlyph1=layout.createSpeciesGlyph()
          speciesGlyph1.setId("SpeciesGlyph_1")
          speciesGlyph1.setSpeciesId(species1.getId())
          bb = new libsbml.BoundingBox(layoutns, "bb2",80,26,240,24)
          speciesGlyph1.setBoundingBox(bb)

          const textGlyph1=layout.createTextGlyph()
          textGlyph1.setId("TextGlyph_01")
          bb = new libsbml.BoundingBox(layoutns, "bbA",92,26,228,24)
          textGlyph1.setBoundingBox(bb)
          textGlyph1.setOriginOfTextId(speciesGlyph1.getId())
          textGlyph1.setGraphicalObjectId(speciesGlyph1.getId())

          const speciesGlyph2=layout.createSpeciesGlyph()
          speciesGlyph2.setId("SpeciesGlyph_2")
          speciesGlyph2.setSpeciesId(species2.getId())
          bb = new libsbml.BoundingBox(layoutns, "bb3",80,170,240,24)
          speciesGlyph2.setBoundingBox(bb)

          const textGlyph2=layout.createTextGlyph()
          textGlyph2.setId("TextGlyph_02")
          bb = new libsbml.BoundingBox(layoutns, "bbB",92,170,228,24)
          textGlyph2.setBoundingBox(bb)
          textGlyph2.setOriginOfTextId(speciesGlyph2.getId())
          textGlyph2.setGraphicalObjectId(speciesGlyph2.getId())

          // create the ReactionGlyphs

          const reactionGlyph1=layout.createReactionGlyph()
          reactionGlyph1.setId("ReactionGlyph_1")
          reactionGlyph1.setReactionId(reaction1.getId())

          const reactionCurve1=reactionGlyph1.getCurve()
          let ls=reactionCurve1.createLineSegment()
          let p = new libsbml.Point(layoutns,165,105)
          ls.setStart(p)
          p = new libsbml.Point(layoutns,165,115)
          ls.setEnd(p)

          const reactionGlyph2=layout.createReactionGlyph()
          reactionGlyph2.setId("ReactionGlyph_1")
          reactionGlyph2.setReactionId(reaction2.getId())

          const reactionCurve2=reactionGlyph2.getCurve()
          ls=reactionCurve2.createLineSegment()
          p = new libsbml.Point(layoutns,235,105)
          ls.setStart(p)
          p = new libsbml.Point(layoutns,235,115)
          ls.setEnd(p)

          // add the SpeciesReferenceGlyphs

          const speciesReferenceGlyph1=reactionGlyph1.createSpeciesReferenceGlyph()
          speciesReferenceGlyph1.setId("SpeciesReferenceGlyph_1")
          speciesReferenceGlyph1.setSpeciesGlyphId(speciesGlyph1.getId())
          speciesReferenceGlyph1.setSpeciesReferenceId(reference1.getId())
          speciesReferenceGlyph1.setRole(libsbml.SPECIES_ROLE_SUBSTRATE)

          const speciesReferenceCurve1=speciesReferenceGlyph1.getCurve()
          let cb=speciesReferenceCurve1.createCubicBezier()
          p = new libsbml.Point(layoutns,165,105)
          cb.setStart(p)
          p = new libsbml.Point(layoutns,165,90)
          cb.setBasePoint1(p)
          p = new libsbml.Point(layoutns,165,90)
          cb.setBasePoint2(p)
          p = new libsbml.Point(layoutns,195,60)
          cb.setEnd(p)

          const speciesReferenceGlyph2=reactionGlyph1.createSpeciesReferenceGlyph()
          speciesReferenceGlyph2.setId("SpeciesReferenceGlyph_2")
          speciesReferenceGlyph2.setSpeciesGlyphId(speciesGlyph2.getId())
          speciesReferenceGlyph2.setSpeciesReferenceId(reference2.getId())
          speciesReferenceGlyph2.setRole(libsbml.SPECIES_ROLE_PRODUCT)

          const speciesReferenceCurve2=speciesReferenceGlyph2.getCurve()
          cb=speciesReferenceCurve2.createCubicBezier()
          p = new libsbml.Point(layoutns,165,115)
          cb.setStart(p)
          p = new libsbml.Point(layoutns,165,130)
          cb.setBasePoint1(p)
          p = new libsbml.Point(layoutns,165,130)
          cb.setBasePoint2(p)
          p = new libsbml.Point(layoutns,195,160)
          cb.setEnd(p)


          const speciesReferenceGlyph3=reactionGlyph2.createSpeciesReferenceGlyph()
          speciesReferenceGlyph3.setId("SpeciesReferenceGlyph_3")
          speciesReferenceGlyph3.setSpeciesGlyphId(speciesGlyph2.getId())
          speciesReferenceGlyph3.setSpeciesReferenceId(reference3.getId())
          speciesReferenceGlyph3.setRole(libsbml.SPECIES_ROLE_SUBSTRATE)

          const speciesReferenceCurve3=speciesReferenceGlyph3.getCurve()
          cb=speciesReferenceCurve3.createCubicBezier()
          p = new libsbml.Point(layoutns,235,115)
          cb.setStart(p)
          p = new libsbml.Point(layoutns,235,130)
          cb.setBasePoint1(p)
          p = new libsbml.Point(layoutns,235,130)
          cb.setBasePoint2(p)
          p = new libsbml.Point(layoutns,205,160)
          cb.setEnd(p)

          const speciesReferenceGlyph4=reactionGlyph2.createSpeciesReferenceGlyph()
          speciesReferenceGlyph4.setId("SpeciesReferenceGlyph_4")
          speciesReferenceGlyph4.setSpeciesGlyphId(speciesGlyph1.getId())
          speciesReferenceGlyph4.setSpeciesReferenceId(reference4.getId())
          speciesReferenceGlyph4.setRole(libsbml.SPECIES_ROLE_PRODUCT)

          const speciesReferenceCurve4=speciesReferenceGlyph4.getCurve()
          cb=speciesReferenceCurve4.createCubicBezier()
          p = new libsbml.Point(layoutns,235,105)
          cb.setStart(p)
          p = new libsbml.Point(layoutns,235,90)
          cb.setBasePoint1(p)
          p = new libsbml.Point(layoutns,235,90)
          cb.setBasePoint2(p)
          p = new libsbml.Point(layoutns,205,60)
          cb.setEnd(p)

          //
          // Create Group
          //

          //
          // Get a GroupsModelPlugin object plugged in the model object.
          //
          const mpluginGroups = libsbml.castObject(model.findPlugin("groups"), libsbml.GroupsModelPlugin)

          //
          // Creates a Group object via GroupsModelPlugin object.
          //
          let group = mpluginGroups.createGroup()

          group.setId("role_substrate")
          group.setKind(libsbml.GROUP_KIND_CLASSIFICATION)

          let member = group.createMember()
          member.setIdRef("SpeciesReferenceGlyph_1")

          member = group.createMember()
          member.setIdRef("SpeciesReferenceGlyph_3")

          group = mpluginGroups.createGroup()
          group.setId("role_product")
          group.setKind(libsbml.GROUP_KIND_CLASSIFICATION)

          member = group.createMember()
          member.setIdRef("SpeciesReferenceGlyph_2")

          member = group.createMember()
          member.setIdRef("SpeciesReferenceGlyph_4")

          const writer = new libsbml.SBMLWriter()
          const serializedSBML = writer.writeSBMLToString(doc)

          // make sure the expected tags are there
          expect(serializedSBML).toContain('groups:listOfGroups')
          expect(serializedSBML).toContain('groups:listOfMembers')
          expect(serializedSBML).toContain('groups:member')
          expect(serializedSBML).toContain('groups:group')
          expect(serializedSBML).toContain('groups:idRef')
          expect(serializedSBML).toContain('groups:listOfMembers')
          expect(serializedSBML).toContain('layout:listOfSpeciesReferenceGlyphs')
          expect(serializedSBML).toContain('layout:listOfTextGlyphs')
          expect(serializedSBML).toContain('layout:boundingBox')
          expect(serializedSBML).toContain('layout:position')
          expect(serializedSBML).toContain('layout:dimensions')

          const reader = new libsbml.SBMLReader()

          const doc_after = reader.readSBMLFromString(serializedSBML)

          // console.log(doc_after.getError(0).getMessage())
          expect(doc_after.getNumErrors()).toEqual(0)
          expect(doc_after.isPackageEnabled('groups')).toEqual(true)

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
