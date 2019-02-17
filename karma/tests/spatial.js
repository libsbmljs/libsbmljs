describe("Spatial test", function() {
  it('Tests the spatial package', (done) => {
    libsbml().then((libsbml) => {
        try {
          const coreVersion = 2
          // create the document
          const document = new libsbml.SBMLDocument()

          document.enablePackage(libsbml.SpatialExtension.prototype.getXmlnsL3V1V1(), 'spatial', true)
          document.setPackageRequired("spatial", true)
          expect(document.isPackageEnabled('spatial')).toEqual(true)

          const model = document.createModel()
          model.setId('trial_spatial')
          model.setName('trial_spatial')

          // create the Compartment

          // create the Compartments
          const compartment = model.createCompartment()
          compartment.setId("cytosol")
          compartment.setConstant(true)

          // create the Species
          const species1 = model.createSpecies()
          species1.setId("ATPc")
          species1.setCompartment("cytosol")
          species1.setInitialConcentration(1.0)
          species1.setHasOnlySubstanceUnits(false)
          species1.setBoundaryCondition(false)
          species1.setConstant(false)
          // spatial package extension to species.
          let srplugin = libsbml.castObject(species1.findPlugin("spatial"), libsbml.SpatialSpeciesPlugin)
          srplugin.setIsSpatial(true)

          // add parameter for diff coeff of species1
          let paramSp = model.createParameter()
          paramSp.setId(species1.getId()+"_dc")
          paramSp.setValue(1.0)
          paramSp.setConstant(true)
          // spatial package extension to parameter.
          let pplugin = libsbml.castObject(paramSp.findPlugin("spatial"), libsbml.SpatialParameterPlugin)
          const diffCoeff = pplugin.createDiffusionCoefficient()
          diffCoeff.setVariable(species1.getId())
          diffCoeff.setType(libsbml.SPATIAL_DIFFUSIONKIND_ANISOTROPIC)
          diffCoeff.setCoordinateReference1(libsbml.SPATIAL_COORDINATEKIND_CARTESIAN_X)
          // add parameter for adv coeff of species1
          paramSp = model.createParameter()
          paramSp.setId(species1.getId()+"_ac")
          paramSp.setValue(1.5)
          paramSp.setConstant(true)
          // spatial package extension to parameter.
          pplugin = libsbml.castObject(paramSp.findPlugin("spatial"), libsbml.SpatialParameterPlugin)
          const advCoeff = pplugin.createAdvectionCoefficient()
          advCoeff.setVariable(species1.getId())
          advCoeff.setCoordinate(libsbml.SPATIAL_COORDINATEKIND_CARTESIAN_X)
          // add parameter for boundary condition of species1
          paramSp = model.createParameter()
          paramSp.setId(species1.getId()+"_bc")
          paramSp.setValue(2.0)
          paramSp.setConstant(true)
          // spatial package extension to parameter.
          pplugin = libsbml.castObject(paramSp.findPlugin("spatial"), libsbml.SpatialParameterPlugin)
          const boundCon = pplugin.createBoundaryCondition()
          boundCon.setVariable(species1.getId());
          boundCon.setType(libsbml.SPATIAL_BOUNDARYKIND_DIRICHLET)
          boundCon.setCoordinateBoundary("Xmin")

          const species2 = model.createSpecies()
          species2.setId("ADPc")
          species2.setCompartment("cytosol")
          species2.setInitialConcentration(1)
          species2.setHasOnlySubstanceUnits(false)
          species2.setBoundaryCondition(false)
          species2.setConstant(false)
          srplugin = libsbml.castObject(species2.findPlugin("spatial"), libsbml.SpatialSpeciesPlugin)
          srplugin.setIsSpatial(true)

          const reaction = model.createReaction()
          reaction.setId("rxn1")
          reaction.setReversible(false)
          reaction.setCompartment("cytosol")
          const rplugin = libsbml.castObject(reaction.findPlugin("spatial"), libsbml.SpatialReactionPlugin)
          rplugin.setIsLocal(true)

          //
          // Get a SpatialModelPlugin object plugged in the model object.
          //
          // The type of the returned value of SBase::getPlugin() function is
          // SBasePlugin, and thus the value needs to be cast for the
          // corresponding derived class.
          //
          const mplugin = libsbml.castObject(model.findPlugin("spatial"), libsbml.SpatialModelPlugin)

          //
          // Creates a geometry object via SpatialModelPlugin object.
          //
          const geometry = mplugin.createGeometry()
          geometry.setCoordinateSystem(libsbml.SPATIAL_GEOMETRYKIND_CARTESIAN)

          const coordX = geometry.createCoordinateComponent()
          coordX.setId("coordComp1")
          coordX.setType(libsbml.SPATIAL_COORDINATEKIND_CARTESIAN_X)
          coordX.setUnit("umeter")
          const minX = coordX.createBoundaryMin()
          minX.setId("Xmin")
          minX.setValue(0.0)
          const maxX = coordX.createBoundaryMax()
          maxX.setId("Xmax")
          maxX.setValue(10.0)

          const paramX = model.createParameter()
          paramX.setId("x")
          paramX.setValue(8.0)
          paramX.setConstant(true)
          // spatial package extension to parameter.
          pplugin = libsbml.castObject(paramX.findPlugin("spatial"), libsbml.SpatialParameterPlugin)
          const spSymRef = pplugin.createSpatialSymbolReference()
          spSymRef.setSpatialRef(coordX.getId())

          let domainType = geometry.createDomainType()
          domainType.setId("dtype1")
          domainType.setSpatialDimensions(3)

          // Spatial package extension to compartment (mapping compartment with domainType)
          const cplugin = libsbml.castObject(compartment.findPlugin("spatial"), libsbml.SpatialCompartmentPlugin)
          const compMapping = cplugin.createCompartmentMapping()
          compMapping.setId("compMap1")
          compMapping.setDomainType(domainType.getId())
          compMapping.setUnitSize(1.0)

          let domain = geometry.createDomain()
          domain.setId("domain1")
          domain.setDomainType("dtype1")
          const internalPt1 = domain.createInteriorPoint()
          internalPt1.setCoord1(1.0)

          domain = geometry.createDomain()
          domain.setId("domain2")
          domain.setDomainType("dtype1")
          const internalPt2 = domain.createInteriorPoint()
          internalPt2.setCoord1(5.0)

          const adjDomain = geometry.createAdjacentDomains()
          adjDomain.setId("adjDomain1")
          adjDomain.setDomain1("domain1")
          adjDomain.setDomain2("domain2")

          const analyticGeom = geometry.createAnalyticGeometry()
          analyticGeom.setId("analyticGeom1")
          analyticGeom.setIsActive(true)
          const analyticVol = analyticGeom.createAnalyticVolume()
          analyticVol.setId("analyticVol1")
          analyticVol.setDomainType(domainType.getId())
          analyticVol.setFunctionType(libsbml.SPATIAL_FUNCTIONKIND_LAYERED)
          analyticVol.setOrdinal(1)
          const mathMLStr = "<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><apply xmlns=\"\"><plus /><apply><times /><ci>x</ci><ci>x</ci></apply><apply><minus /><cn>1.0</cn></apply></apply></math>"
          const parser = new libsbml.SBMLFormulaParser()
          const mathNode = parser.fromMathML(mathMLStr)
          analyticVol.setMath(mathNode)

          const sfg = geometry.createSampledFieldGeometry()
          sfg.setId("sampledFieldGeom1")
          sfg.setSampledField("sampledField1")
          sfg.setIsActive(true)
          const sampledField = geometry.createSampledField()
          sampledField.setId("sampledField1")
          sampledField.setNumSamples1(4)
          sampledField.setNumSamples2(4)
          sampledField.setNumSamples3(2)
          sampledField.setInterpolationType("linear")
          sampledField.setCompression("uncompressed")
          const samples = [
	                 // z=0
	                 0,0,0,0,
	                 0,1,1,0,
        					 0,1,1,0,
        					 0,0,0,0,
        					 // z=1
        					 0,0,0,0,
        					 0,1,1,0,
        					 0,1,1,0,
        					 0,0,0,0
          ]
          sampledField.setDataType("uint8")
          sampledField.setSamples(samples, 32)
          const sampledVol = sfg.createSampledVolume()
          sampledVol.setId("sv_1")
          sampledVol.setDomainType(domainType.getId())
          sampledVol.setSampledValue(128.0)
          sampledVol.setMinValue(0.0)
          sampledVol.setMaxValue(255.0)


          const writer = new libsbml.SBMLWriter()
          const serializedSBML = writer.writeSBMLToString(document)

          // make sure the expected tags are there
          expect(serializedSBML).toContain('spatial:diffusionCoefficient')
          expect(serializedSBML).toContain('spatial:advectionCoefficient')
          expect(serializedSBML).toContain('spatial:boundaryCondition')
          expect(serializedSBML).toContain('spatial:geometry')
          expect(serializedSBML).toContain('spatial:listOfCoordinateComponents')
          expect(serializedSBML).toContain('spatial:coordinateComponent')
          expect(serializedSBML).toContain('spatial:boundaryMin')
          expect(serializedSBML).toContain('spatial:boundaryMax')
          expect(serializedSBML).toContain('spatial:listOfAdjacentDomains')
          expect(serializedSBML).toContain('spatial:adjacentDomains')
          expect(serializedSBML).toContain('spatial:analyticGeometry')
          expect(serializedSBML).toContain('spatial:analyticVolume')
          expect(serializedSBML).toContain('spatial:listOfAnalyticVolumes')
          expect(serializedSBML).toContain('spatial:sampledFieldGeometry')
          expect(serializedSBML).toContain('spatial:listOfSampledVolumes')
          expect(serializedSBML).toContain('spatial:sampledVolume')
          expect(serializedSBML).toContain('spatial:listOfSampledFields')
          expect(serializedSBML).toContain('spatial:sampledField')

          const reader = new libsbml.SBMLReader()

          const doc_after = reader.readSBMLFromString(serializedSBML)

          for (var i=0; i<doc_after.getNumErrors(); i++) {
            console.log(doc_after.getError(i).getMessage())
          }
          expect(doc_after.getNumErrors()).toEqual(0)
          expect(doc_after.isPackageEnabled('spatial')).toEqual(true)

          libsbml.destroy(document)
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
