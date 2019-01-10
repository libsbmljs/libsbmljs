#include "sbml/SBMLReader.h"
#include "sbml/SBMLWriter.h"
#include "sbml/SBMLDocument.h"
#include "sbml/Model.h"
#include "sbml/extension/SBasePlugin.h"

LIBSBML_CPP_NAMESPACE_BEGIN

  class SBMLFormulaParser {
  public:
    SBMLFormulaParser() {}

    ASTNode_t* parseL3Formula(const std::string& formula) {
      return SBML_parseL3Formula(formula.c_str());
    }

    ASTNode_t* parseFormula(const std::string& formula) {
      return SBML_parseFormula(formula.c_str());
    }
  };

LIBSBML_CPP_NAMESPACE_END

// Wrapper objects
namespace libsbmljs {

  class SBMLWriter {
  public:
    SBMLWriter() : writer_() {}

    std::string writeSBMLToString(const libsbml::SBMLDocument* doc) {
      char* buf = writer_.writeSBMLToString(doc);
      std::string result(buf);
      free(buf);
      // BUG: temporary is retured, then deleted by caller
      return result;
    }

  protected:
    libsbml::SBMLWriter writer_;
  };

  class RuleSwitch {
  public:
    RuleSwitch() {}

    libsbml::AssignmentRule* castToAssignmentRule(libsbml::Rule* r) {
      libsbml::AssignmentRule* result = dynamic_cast<libsbml::AssignmentRule*>(r);
      assert(result && "Cast to assignment rule failed");
      return result;
    }

    libsbml::RateRule* castToRateRule(libsbml::Rule* r) {
      libsbml::RateRule* result = dynamic_cast<libsbml::RateRule*>(r);
      assert(result && "Cast to rate rule failed");
      return result;
    }

    libsbml::AlgebraicRule* castToAlgebraicRule(libsbml::Rule* r) {
      libsbml::AlgebraicRule* result = dynamic_cast<libsbml::AlgebraicRule*>(r);
      assert(result && "Cast to algebraic rule failed");
      return result;
    }
  };

  class Capabilities {
  public:
    Capabilities() {}

    bool isLayoutSupported() const {
# ifdef LIBSBML_HAS_PACKAGE_LAYOUT
      return true;
# else
      return false;
# endif
    }

    bool isRenderSupported() const {
# ifdef LIBSBML_HAS_PACKAGE_RENDER
      return true;
# else
      return false;
# endif
    }
  };

}

// #include "sbml_interface.cpp"
