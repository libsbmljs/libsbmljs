describe("Distrib test", function() {
  it('createConfidenceIntervalEx', (done) => {
    libsbml().then((libsbml) => {
        try {
          // DistribDrawFromDistribution* setupBasicModel()
          // {
          //   SBMLNamespaces sbmlns(3, coreVersion, "distrib", 1)
          //
          //   // create the document
          //   SBMLDocument *document = new SBMLDocument(&sbmlns)
          //
          //   //Create our submodel
          //   DistribSBMLDocumentPlugin* distdoc
          //     = static_cast<DistribSBMLDocumentPlugin*>(document.getPlugin("distrib"))
          //   distdoc.setRequired(true)
          //   Model* model = document.createModel()
          //   FunctionDefinition* fd = model.createFunctionDefinition()
          //   if (coreVersion == 1)
          //   {
          //     ASTNode* math = SBML_parseL3Formula("lambda(x, y, NaN)")
          //     fd.setMath(math)
          //     delete math
          //   }
          //   else
          //   {
          //     fd.setMath(NULL)
          //   }
          //   fd.setId("distribution")
          //   DistribFunctionDefinitionPlugin* dfdp = static_cast<DistribFunctionDefinitionPlugin*>(fd.getPlugin("distrib"))
          //   DistribDrawFromDistribution* draw = dfdp.createDistribDrawFromDistribution()
          //   return draw
          // }
          //
          // InitialAssignment* addParamAndIA(Model* model)
          // {
          //   Parameter* param = model.createParameter()
          //   param.setId("P1")
          //   param.setConstant(true)
          //   InitialAssignment* ia = model.createInitialAssignment()
          //   ia.setSymbol("P1")
          //   return ia
          // }
          //
          // void setupArguments(DistribDrawFromDistribution* dfd, InitialAssignment* ia, Model* model, vector<string> arguments)
          // {
          //   string infix = "distribution("
          //   for (size_t i = 0; i < arguments.size(); i++) {
          //     string arg = arguments[i]
          //     Parameter* param = model.createParameter()
          //     param.setConstant(true)
          //     param.setId(arg)
          //     DistribInput* di = dfd.createDistribInput()
          //     di.setId(arg)
          //     di.setIndex(i)
          //     if (i > 0) {
          //       infix += ", "
          //     }
          //     infix += arg
          //   }
          //   infix += ")"
          //   ASTNode* math = SBML_parseL3Formula(infix.c_str())
          //   ia.setMath(math)
          //   delete math
          // }
          //
          // void addNormal(DistribDrawFromDistribution* dfd)
          // {
          //   DistribNormalDistribution normal(3, coreVersion, 1)
          //   DistribUncertValue* mean = normal.createMean()
          //   mean.setVar("mean")
          //   DistribUncertValue* stddev = normal.createStddev()
          //   stddev.setVar("stddev")
          //   dfd.setDistribution(&normal)
          // }
          //
          // void addNormalWithValues(DistribDrawFromDistribution* dfd)
          // {
          //   DistribNormalDistribution normal(3, coreVersion, 1)
          //   DistribUncertValue* mean = normal.createMean()
          //   mean.setValue(5.2)
          //   DistribUncertValue* stddev = normal.createStddev()
          //   stddev.setValue(1.3)
          //   dfd.setDistribution(&normal)
          // }
          //
          // void createExample1()
          // {
          //   DistribDrawFromDistribution* dfd = setupBasicModel()
          //   SBMLDocument* doc = dfd.getSBMLDocument()
          //   Model* model = doc.getModel()
          //   InitialAssignment* ia = addParamAndIA(model)
          //   vector<string> arguments
          //   arguments.push_back("mean")
          //   arguments.push_back("stddev")
          //   setupArguments(dfd, ia, model, arguments)
          //   addNormal(dfd)
          //   Parameter* mean = model.getParameter("mean")
          //   mean.setValue(5.2)
          //   Parameter* stddev = model.getParameter("stddev")
          //   stddev.setValue(1.3)
          //
          //   writeSBMLToFile(doc, "distrib_example1.xml")
          //   delete doc
          // }
          //
          // void createExample2()
          // {
          //   DistribDrawFromDistribution* dfd = setupBasicModel()
          //   SBMLDocument* doc = dfd.getSBMLDocument()
          //   Model* model = doc.getModel()
          //   InitialAssignment* ia = addParamAndIA(model)
          //   vector<string> arguments
          //   setupArguments(dfd, ia, model, arguments)
          //   addNormalWithValues(dfd)
          //
          //   writeSBMLToFile(doc, "distrib_example2.xml")
          //   delete doc
          // }
          //
          // void createDistribUncertaintyExample()
          // {
          //   SBMLNamespaces sbmlns(3, coreVersion, "distrib", 1)
          //
          //   // create the document
          //   SBMLDocument *document = new SBMLDocument(&sbmlns)
          //   DistribSBMLDocumentPlugin* distdoc
          //     = static_cast<DistribSBMLDocumentPlugin*>(document.getPlugin("distrib"))
          //   distdoc.setRequired(true)
          //   Model* model = document.createModel()
          //   Species* s1 = model.createSpecies()
          //   DistribSBasePlugin* dsbp = static_cast<DistribSBasePlugin*>(s1.getPlugin("distrib"))
          //   DistribUncertainty* uncertainty = dsbp.createDistribUncertainty()
          //   DistribUncertStatistics* stats = uncertainty.createUncertStatistics()
          //   DistribUncertValue* sdev = stats.createStandardDeviation()
          //   sdev.setValue(0.3)
          //   s1.setInitialAmount(3.22)
          //   s1.setId("s1")
          //   s1.setCompartment("C")
          //   s1.setHasOnlySubstanceUnits(true)
          //   s1.setBoundaryCondition(false)
          //   s1.setConstant(false)
          //   Compartment* c = model.createCompartment()
          //   c.setId("C")
          //   c.setConstant(true)
          //   c.setSize(1)
          //   c.setSpatialDimensions(3.0)
          //
          //   writeSBMLToFile(document, "distrib_example3.xml")
          //   delete document
          // }
          //
          // void createDistribUncertaintyExample2()
          // {
          //   SBMLNamespaces sbmlns(3, coreVersion, "distrib", 1)
          //
          //   // create the document
          //   SBMLDocument *document = new SBMLDocument(&sbmlns)
          //   DistribSBMLDocumentPlugin* distdoc
          //     = static_cast<DistribSBMLDocumentPlugin*>(document.getPlugin("distrib"))
          //   distdoc.setRequired(true)
          //   Model* model = document.createModel()
          //   Species* s1 = model.createSpecies()
          //   DistribSBasePlugin* dsbp = static_cast<DistribSBasePlugin*>(s1.getPlugin("distrib"))
          //   DistribUncertainty* uncertainty = dsbp.createDistribUncertainty()
          //   DistribUncertStatistics* stats = uncertainty.createUncertStatistics()
          //   DistribUncertValue* sdev = stats.createStandardDeviation()
          //   sdev.setValue(0.3)
          //   DistribUncertValue* mean = stats.createMean()
          //   mean.setValue(3.2)
          //   DistribUncertValue* var = stats.createVariance()
          //   var.setValue(0.09)
          //   s1.setInitialAmount(3.22)
          //   s1.setId("s1")
          //   s1.setCompartment("C")
          //   s1.setHasOnlySubstanceUnits(true)
          //   s1.setBoundaryCondition(false)
          //   s1.setConstant(false)
          //   Compartment* c = model.createCompartment()
          //   c.setId("C")
          //   c.setConstant(true)
          //   c.setSize(1)
          //   c.setSpatialDimensions(3.0)
          //
          //   writeSBMLToFile(document, "distrib_example4.xml")
          //   delete document
          // }
          //
          // void createDistribUncertaintyExample3()
          // {
          //   SBMLNamespaces sbmlns(3, coreVersion, "distrib", 1)
          //
          //   // create the document
          //   SBMLDocument *document = new SBMLDocument(&sbmlns)
          //   DistribSBMLDocumentPlugin* distdoc
          //     = static_cast<DistribSBMLDocumentPlugin*>(document.getPlugin("distrib"))
          //   distdoc.setRequired(true)
          //   Model* model = document.createModel()
          //   Parameter* p1 = model.createParameter()
          //   p1.setId("mu_Z")
          //   p1.setValue(10)
          //   p1.setConstant(true)
          //   p1 = model.createParameter()
          //   p1.setId("var_Z")
          //   p1.setValue(0.1)
          //   p1.setConstant(true)
          //   p1 = model.createParameter()
          //   p1.setId("Z")
          //   p1.setConstant(true)
          //   DistribSBasePlugin* dsbp = static_cast<DistribSBasePlugin*>(p1.getPlugin("distrib"))
          //   DistribUncertainty* uncertainty = dsbp.createDistribUncertainty()
          //   DistribNormalDistribution normal(3, coreVersion, 1)
          //   DistribUncertValue* mean = normal.createMean()
          //   mean.setVar("mu_Z")
          //   DistribUncertValue* var = normal.createVariance()
          //   var.setVar("var_Z")
          //   uncertainty.setDistribution(&normal)
          //
          //   writeSBMLToFile(document, "distrib_example5.xml")
          //   delete document
          // }
          //
          // void createDistribUncertaintyExample4()
          // {
          //   SBMLNamespaces sbmlns(3, coreVersion, "distrib", 1)
          //
          //   // create the document
          //   SBMLDocument *document = new SBMLDocument(&sbmlns)
          //   DistribSBMLDocumentPlugin* distdoc
          //     = static_cast<DistribSBMLDocumentPlugin*>(document.getPlugin("distrib"))
          //   distdoc.setRequired(true)
          //   Model* model = document.createModel()
          //   Species* s1 = model.createSpecies()
          //   DistribSBasePlugin* dsbp = static_cast<DistribSBasePlugin*>(s1.getPlugin("distrib"))
          //   DistribUncertainty* uncertainty = dsbp.createDistribUncertainty()
          //   DistribCategoricalDistribution d(3, coreVersion, 1)
          //   DistribCategory cat(3, coreVersion, 1)
          //   cat.setId("patient1")
          //   DistribUncertValue* prob = cat.createProbability()
          //   prob.setValue(0.5)
          //   DistribUncertValue* val = cat.createValue()
          //   val.setValue(1.01)
          //   d.addDistribCategory(&cat)
          //   cat.setId("patient2")
          //   val.setValue(2.24)
          //   prob.setValue(0.25)
          //   d.addDistribCategory(&cat)
          //   cat.setId("patient3")
          //   val.setValue(1.72)
          //   cat.unsetProbability(); //To let it sum to one automatically.
          //   d.addDistribCategory(&cat)
          //   uncertainty.setDistribution(&d)
          //   s1.setId("s1")
          //   s1.setCompartment("C")
          //   s1.setHasOnlySubstanceUnits(true)
          //   s1.setBoundaryCondition(false)
          //   s1.setConstant(false)
          //   Compartment* c = model.createCompartment()
          //   c.setId("C")
          //   c.setConstant(true)
          //   c.setSize(1)
          //   c.setSpatialDimensions(3.0)
          //
          //   writeSBMLToFile(document, "distrib_example6.xml")
          //   delete document
          // }
          //
          // void createUncertainGender()
          // {
          //   SBMLNamespaces sbmlns(3, coreVersion, "distrib", 1)
          //
          //   // create the document
          //   SBMLDocument *document = new SBMLDocument(&sbmlns)
          //   Model* model = document.createModel()
          //   DistribSBMLDocumentPlugin* distdoc
          //     = static_cast<DistribSBMLDocumentPlugin*>(document.getPlugin("distrib"))
          //   distdoc.setRequired(true)
          //   Parameter* p1 = model.createParameter()
          //   p1.setId("gender")
          //   p1.setConstant(false)
          //   DistribSBasePlugin* dsbp = static_cast<DistribSBasePlugin*>(p1.getPlugin("distrib"))
          //   DistribUncertainty* uncertainty = dsbp.createDistribUncertainty()
          //   DistribCategoricalDistribution d(3, coreVersion, 1)
          //   DistribCategory cat(3, coreVersion, 1)
          //   cat.setId("male")
          //   DistribUncertValue* prob = cat.createProbability()
          //   prob.setValue(0.5)
          //   DistribUncertValue* val = cat.createValue()
          //   val.setValue(0)
          //   d.addDistribCategory(&cat)
          //   cat.setId("female")
          //   val.setValue(1)
          //   prob.setValue(0.5)
          //   d.addDistribCategory(&cat)
          //   uncertainty.setDistribution(&d)
          //
          //   writeSBMLToFile(document, "distrib_example7.xml")
          //   delete document
          // }
          //
          // void createPkPd()
          // {
          //   SBMLNamespaces sbmlns(3, coreVersion, "distrib", 1)
          //   DistribDrawFromDistribution* dfd = setupBasicModel()
          //   SBMLDocument* doc = dfd.getSBMLDocument()
          //   Model* model = doc.getModel()
          //   FunctionDefinition* fd = model.getFunctionDefinition(0)
          //   ASTNode* astn = SBML_parseL3Formula("lambda(scale, shape, NaN)")
          //   fd.setMath(astn)
          //   fd.setId("logNormal")
          //   DistribInput* di = dfd.createDistribInput()
          //   di.setId("scale")
          //   di.setIndex(0)
          //   di = dfd.createDistribInput()
          //   di.setId("shape")
          //   di.setIndex(1)
          //   DistribLogNormalDistribution logn(3, coreVersion, 1)
          //   DistribUncertValue* uv = logn.createLogScale()
          //   uv.setVar("scale")
          //   uv = logn.createShape()
          //   uv.setVar("shape")
          //   dfd.setDistribution(&logn)
          //
          //   Compartment comp(&sbmlns)
          //   comp.setId("central")
          //   comp.setSize(0)
          //   comp.setConstant(true)
          //   model.addCompartment(&comp)
          //   comp.setId("gut")
          //   model.addCompartment(&comp)
          //
          //   Species s(&sbmlns)
          //   s.setId("Qc")
          //   s.setCompartment("central")
          //   s.setInitialAmount(1)
          //   s.setHasOnlySubstanceUnits(true)
          //   s.setBoundaryCondition(false)
          //   s.setConstant(false)
          //   model.addSpecies(&s)
          //   s.setId("Qg")
          //   s.setCompartment("gut")
          //   model.addSpecies(&s)
          //
          //   Parameter p(&sbmlns)
          //   p.setId("ka")
          //   p.setConstant(true)
          //   model.addParameter(&p)
          //   p.setId("ke")
          //   model.addParameter(&p)
          //   p.setId("Cc")
          //   p.setConstant(false)
          //   model.addParameter(&p)
          //   p.setId("Cc_obs")
          //   model.addParameter(&p)
          //
          //   InitialAssignment ia(&sbmlns)
          //   ia.setSymbol("central")
          //   delete astn
          //   astn = SBML_parseL3Formula("logNormal(0.5, 0.1)")
          //   ia.setMath(astn)
          //   model.addInitialAssignment(&ia)
          //   ia.setSymbol("ka")
          //   model.addInitialAssignment(&ia)
          //   ia.setSymbol("ke")
          //   model.addInitialAssignment(&ia)
          //
          //   AssignmentRule ar(&sbmlns)
          //   ar.setVariable("Cc")
          //   delete astn
          //   astn = SBML_parseL3Formula("Qc/central")
          //   ar.setMath(astn)
          //   model.addRule(&ar)
          //   ar.setVariable("Cc_obs")
          //   delete astn
          //   astn = SBML_parseL3Formula("Cc + 1")
          //   ar.setMath(astn)
          //   model.addRule(&ar)
          //
          //   Reaction* rxn = model.createReaction()
          //   rxn.setId("absorption")
          //   rxn.setReversible(false)
          //   rxn.setFast(false)
          //   SpeciesReference* sr = rxn.createReactant()
          //   sr.setSpecies("Qg")
          //   sr.setStoichiometry(1)
          //   sr.setConstant(true)
          //   sr = rxn.createProduct()
          //   sr.setSpecies("Qc")
          //   sr.setStoichiometry(1)
          //   sr.setConstant(true)
          //   delete astn
          //   astn = SBML_parseL3Formula("ka*Qg")
          //   KineticLaw* kl = rxn.createKineticLaw()
          //   kl.setMath(astn)
          //
          //   rxn = model.createReaction()
          //   rxn.setId("excretion")
          //   rxn.setReversible(false)
          //   rxn.setFast(false)
          //   sr = rxn.createReactant()
          //   sr.setSpecies("Qc")
          //   sr.setStoichiometry(1)
          //   sr.setConstant(true)
          //   delete astn
          //   astn = SBML_parseL3Formula("(ke*Qc)/central")
          //   kl = rxn.createKineticLaw()
          //   kl.setMath(astn)
          //
          //   writeSBMLToFile(doc, "pkpd.xml")
          //   delete doc
          // }
          //
          // void createExternalExponential()
          // {
          //   SBMLNamespaces sbmlns(3, coreVersion, "distrib", 1)
          //
          //   // create the document
          //   SBMLDocument *document = new SBMLDocument(&sbmlns)
          //   DistribSBMLDocumentPlugin* distdoc
          //     = static_cast<DistribSBMLDocumentPlugin*>(document.getPlugin("distrib"))
          //   distdoc.setRequired(true)
          //   Model* model = document.createModel()
          //   FunctionDefinition* fd = model.createFunctionDefinition()
          //   fd.setId("Exponential2")
          //   DistribFunctionDefinitionPlugin* dfdp = static_cast<DistribFunctionDefinitionPlugin*>(fd.getPlugin("distrib"))
          //   DistribDrawFromDistribution* dfd = dfdp.createDistribDrawFromDistribution()
          //   DistribInput* input = dfd.createDistribInput()
          //   input.setId("beta")
          //   input.setIndex(0)
          //   DistribExternalDistribution ext(3, coreVersion, 1)
          //   ext.setDefinitionURL("http://www.probonto.org/ontology#PROB_k0000353")
          //   ext.setName("Exponential 2")
          //   DistribExternalParameter* param = ext.createDistribExternalParameter()
          //   param.setDefinitionURL("http://www.probonto.org/ontology#PROB_k0000362")
          //   param.setName("Beta")
          //   param.setVar("beta")
          //   dfd.setDistribution(&ext)
          //
          //   writeSBMLToFile(document, "distrib_example8.xml")
          //   delete document
          // }
          //
          // void createUserDefined()
          // {
          //   DistribDrawFromDistribution* dfd = setupBasicModel()
          //   SBMLDocument* doc = dfd.getSBMLDocument()
          //   Model* model = doc.getModel()
          //   InitialAssignment* ia = addParamAndIA(model)
          //   addNormal(dfd)
          //
          //   vector<string> arguments
          //   arguments.push_back("mean")
          //   arguments.push_back("stddev")
          //   setupArguments(dfd, ia, model, arguments)
          //   Parameter* param = model.createParameter()
          //   param.setConstant(true)
          //   param.setId("V_pop")
          //   param.setValue(100)
          //   param = model.createParameter()
          //   param.setConstant(true)
          //   param.setId("V_omega")
          //   param.setValue(0.25)
          //   ASTNode* astn = SBML_parseL3Formula("normal(V_pop, V_omega)")
          //   ia.setMath(astn)
          //   param = model.getParameter("P1")
          //   param.setId("V")
          //   ia.setSymbol("V")
          //   delete astn
          //   DistribSBasePlugin* dsbp = static_cast<DistribSBasePlugin*>(ia.getPlugin("distrib"))
          //   DistribUncertainty* uncert = dsbp.createDistribUncertainty()
          //   DistribUncertStatistics* stats = uncert.createUncertStatistics()
          //   DistribUncertValue uv(3, coreVersion, 1)
          //   uv.setVar("V_pop")
          //   stats.setMean(uv)
          //   uv.setVar("V_omega")
          //   stats.setStandardDeviation(uv)
          //
          //   dsbp = static_cast<DistribSBasePlugin*>(param.getPlugin("distrib"))
          //   dsbp.setDistribUncertainty(uncert)
          //
          //   model.removeParameter("mean")
          //   model.removeParameter("stddev")
          //   FunctionDefinition* fd = model.getFunctionDefinition(0)
          //   fd.setId("normal")
          //   if (coreVersion == 1)
          //   {
          //     ASTNode* math = SBML_parseL3Formula("lambda(x, y, notanumber)")
          //     fd.setMath(math)
          //     delete math
          //   }
          //   else
          //   {
          //     fd.setMath(NULL)
          //   }
          //   writeSBMLToFile(doc, "user-defined.xml")
          //   delete doc
          // }
            const coreVersion = 2
            // create the document
            const document = new libsbml.SBMLDocument()

            document.enablePackage(libsbml.DistribExtension.prototype.getXmlnsL3V2V1(), 'distrib', true)
            document.setPackageRequired("distrib", true)
            expect(document.isPackageEnabled('distrib')).toEqual(true)

            const distdoc = libsbml.castObject(document.findPlugin("distrib"), libsbml.DistribSBMLDocumentPlugin)
            // distdoc.setRequired(true)
            const model = document.createModel()

            let param = model.createParameter()
            param.setConstant(true)
            let dsbp = libsbml.castObject(param.findPlugin("distrib"), libsbml.DistribSBasePlugin)
            let uncert = dsbp.createDistribUncertainty()
            let stats = uncert.createUncertStatistics()
            let uss = new libsbml.DistribUncertStatisticSpan(3, coreVersion, 1)
            param = model.createParameter()
            param.setId("P1")
            param.setValue(5.13)
            uss.setValueLower(5.0)
            uss.setValueUpper(5.32)
            stats.setConfidenceInterval(uss)

            param = model.createParameter()
            param.setId("P2")
            param.setValue(15.0)
            uss = new libsbml.DistribUncertStatisticSpan(3, coreVersion, 1)
            uss.setValueLower(10.22)
            uss.setValueUpper(15.02)
            stats.setConfidenceInterval(uss)

            param = model.createParameter()
            param.setId("P3")
            param.setValue(0.003)
            uss = new libsbml.DistribUncertStatisticSpan(3, coreVersion, 1)
            uss.setValueLower(-0.001)
            uss.setValueUpper(0.0041)
            stats.setConfidenceInterval(uss)

            param = model.createParameter()
            param.setId("P4")
            param.setValue(.34)
            uss = new libsbml.DistribUncertStatisticSpan(3, coreVersion, 1)
            uss.setValueLower(.22)
            uss.setValueUpper(.51)
            stats.setConfidenceInterval(uss)

            param = model.createParameter()
            param.setId("P5")
            param.setValue(92)
            uss = new libsbml.DistribUncertStatisticSpan(3, coreVersion, 1)
            uss.setValueLower(90)
            uss.setValueUpper(99)
            stats.setConfidenceInterval(uss)

            param = model.createParameter()
            param.setId("P6")
            param.setValue(40.002)
            uss = new libsbml.DistribUncertStatisticSpan(3, coreVersion, 1)
            uss.setValueLower(40.0018)
            uss.setValueUpper(40.0021)
            stats.setConfidenceInterval(uss)

            const c = model.createCompartment()
            c.setId("C")
            c.setConstant(true)
            c.setSize(1)
            c.setSpatialDimensions(3.0)

            let s = model.createSpecies()
            s.setConstant(false)
            s.setBoundaryCondition(false)
            s.setHasOnlySubstanceUnits(false)
            s.setCompartment("C")
            dsbp = libsbml.castObject(s.findPlugin("distrib"), libsbml.DistribSBasePlugin)
            uncert = dsbp.createDistribUncertainty()
            stats = uncert.createUncertStatistics()

            let uv = new libsbml.DistribUncertValue(3, coreVersion, 1)
            s.setConstant(false)
            s.setBoundaryCondition(false)
            s.setHasOnlySubstanceUnits(false)
            s.setCompartment("C")
            s.setId("S1")
            s.setInitialAmount(5.2)
            uv.setValue(0.3)
            stats.setStandardDeviation(uv)

            s = model.createSpecies()
            uv = new libsbml.DistribUncertValue(3, coreVersion, 1)
            s.setConstant(false)
            s.setBoundaryCondition(false)
            s.setHasOnlySubstanceUnits(false)
            s.setCompartment("C")
            s.setId("S2")
            s.setInitialAmount(8.7)
            uv.setValue(0.01)
            stats.setStandardDeviation(uv)

            s = model.createSpecies()
            uv = new libsbml.DistribUncertValue(3, coreVersion, 1)
            s.setConstant(false)
            s.setBoundaryCondition(false)
            s.setHasOnlySubstanceUnits(false)
            s.setCompartment("C")
            s.setId("S3")
            s.setInitialAmount(1102)
            uv.setValue(53)
            stats.setStandardDeviation(uv)

            s = model.createSpecies()
            uv = new libsbml.DistribUncertValue(3, coreVersion, 1)
            s.setConstant(false)
            s.setBoundaryCondition(false)
            s.setHasOnlySubstanceUnits(false)
            s.setCompartment("C")
            s.setId("S4")
            s.setInitialAmount(0.026)
            uv.setValue(0.004)
            stats.setStandardDeviation(uv)

            const writer = new libsbml.SBMLWriter()
            const serializedSBML = writer.writeSBMLToString(document)

            // make sure the expected tags are there
            console.log(serializedSBML)
            // expect(serializedSBML).toContain('multi:listOfSpeciesTypes')

            const reader = new libsbml.SBMLReader()

            const doc_after = reader.readSBMLFromString(serializedSBML)

            console.log(doc_after.getError(0).getMessage())
            expect(doc_after.getNumErrors()).toEqual(0)
            expect(doc_after.isPackageEnabled('multi')).toEqual(true)

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
