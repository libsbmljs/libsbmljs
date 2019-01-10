#include "sbml/SBMLReader.h"
#include "sbml/SBMLWriter.h"
#include "sbml/SBMLDocument.h"
#include "sbml/Model.h"
#include "sbml/extension/SBasePlugin.h"
#include "sbml/extension/SBMLDocumentPlugin.h"
#include "sbml/packages/layout/common/LayoutExtensionTypes.h"

// LIBSBML_CPP_NAMESPACE_BEGIN
//
// LIBSBML_CPP_NAMESPACE_END

// Wrapper objects
namespace libsbmljs {

  class LayoutCaster {
  public:
    LayoutCaster() {}

    libsbml::LayoutModelPlugin* castToLayoutPlugin(libsbml::SBasePlugin* p) {
      libsbml::LayoutModelPlugin* result = dynamic_cast<libsbml::LayoutModelPlugin*>(p);
      assert(result && "Cast to layout plugin failed");
      return result;
    }
  };

  class LayoutExtensionWrapper {
  public:
    const std::string& getXmlnsL2() {
      return libsbml::LayoutExtension::getXmlnsL2();
    }

    const std::string& getXmlnsL3V1V1() {
      return libsbml::LayoutExtension::getXmlnsL3V1V1();
    }
  };

  class CurveCaster {
  public:
    CurveCaster() {}

    bool isCubicBezier(libsbml::LineSegment* x) {
      libsbml::LineSegment* result = dynamic_cast<libsbml::LineSegment*>(x);
      return result;
    }

    libsbml::CubicBezier* castToCubicBezier(libsbml::LineSegment* x) {
      libsbml::CubicBezier* result = dynamic_cast<libsbml::CubicBezier*>(x);
      assert(result && "Cast to CubicBezier failed");
      return result;
    }
  };

}
