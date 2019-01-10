#include "sbml/SBMLReader.h"
#include "sbml/SBMLWriter.h"
#include "sbml/SBMLDocument.h"
#include "sbml/Model.h"
#include "sbml/extension/SBasePlugin.h"
#include "sbml/extension/SBMLDocumentPlugin.h"
#include "sbml/packages/layout/common/LayoutExtensionTypes.h"
#include "sbml/packages/render/common/RenderExtensionTypes.h"

// LIBSBML_CPP_NAMESPACE_BEGIN
//
// LIBSBML_CPP_NAMESPACE_END

// Wrapper objects
namespace libsbmljs {

  class BezierCaster {
  public:
    BezierCaster() {}

    bool isBezier(libsbml::RenderPoint* p) {
      libsbml::RenderCubicBezier* result = dynamic_cast<libsbml::RenderCubicBezier*>(p);
      return result;
    }

    libsbml::RenderCubicBezier* asBezier(libsbml::RenderPoint* p) {
      libsbml::RenderCubicBezier* result = dynamic_cast<libsbml::RenderCubicBezier*>(p);
      assert(result && "Cast to render bezier failed");
      return result;
    }
  };

  class PrimitiveCaster {
  public:
    PrimitiveCaster() {}

    bool isPolygon(libsbml::Transformation2D* p) {
      libsbml::Polygon* result = dynamic_cast<libsbml::Polygon*>(p);
      return result;
    }

    libsbml::Polygon* asPolygon(libsbml::Transformation2D* p) {
      libsbml::Polygon* result = dynamic_cast<libsbml::Polygon*>(p);
      return result;
    }

    bool isImage(libsbml::Transformation2D* p) {
      libsbml::Image* result = dynamic_cast<libsbml::Image*>(p);
      return result;
    }

    libsbml::Image* asImage(libsbml::Transformation2D* p) {
      libsbml::Image* result = dynamic_cast<libsbml::Image*>(p);
      return result;
    }

    bool isRectangle(libsbml::Transformation2D* p) {
      libsbml::Rectangle* result = dynamic_cast<libsbml::Rectangle*>(p);
      return result;
    }

    libsbml::Rectangle* asRectangle(libsbml::Transformation2D* p) {
      libsbml::Rectangle* result = dynamic_cast<libsbml::Rectangle*>(p);
      return result;
    }

    bool isEllipse(libsbml::Transformation2D* p) {
      libsbml::Ellipse* result = dynamic_cast<libsbml::Ellipse*>(p);
      return result;
    }

    libsbml::Ellipse* asEllipse(libsbml::Transformation2D* p) {
      libsbml::Ellipse* result = dynamic_cast<libsbml::Ellipse*>(p);
      return result;
    }

    bool isRenderCurve(libsbml::Transformation2D* p) {
      libsbml::RenderCurve* result = dynamic_cast<libsbml::RenderCurve*>(p);
      return result;
    }

    libsbml::RenderCurve* asRenderCurve(libsbml::Transformation2D* p) {
      libsbml::RenderCurve* result = dynamic_cast<libsbml::RenderCurve*>(p);
      return result;
    }

    bool isText(libsbml::Transformation2D* p) {
      libsbml::Text* result = dynamic_cast<libsbml::Text*>(p);
      return result;
    }

    libsbml::Text* asText(libsbml::Transformation2D* p) {
      libsbml::Text* result = dynamic_cast<libsbml::Text*>(p);
      return result;
    }
    
  };

  class GradientCaster {
  public:
    GradientCaster() {}

    bool isLinear(libsbml::GradientBase* p) {
      libsbml::LinearGradient* result = dynamic_cast<libsbml::LinearGradient*>(p);
      return result;
    }

    libsbml::LinearGradient* asLinear(libsbml::GradientBase* p) {
      libsbml::LinearGradient* result = dynamic_cast<libsbml::LinearGradient*>(p);
      assert(result && "Cast to linear gradient failed");
      return result;
    }

    bool isRadial(libsbml::GradientBase* p) {
      libsbml::RadialGradient* result = dynamic_cast<libsbml::RadialGradient*>(p);
      return result;
    }

    libsbml::RadialGradient* asRadial(libsbml::GradientBase* p) {
      libsbml::RadialGradient* result = dynamic_cast<libsbml::RadialGradient*>(p);
      assert(result && "Cast to radial gradient failed");
      return result;
    }
  };

  class RenderExtensionWrapper {
  public:
    const std::string& getXmlnsL2() {
      return libsbml::RenderExtension::getXmlnsL2();
    }

    const std::string& getXmlnsL3V1V1() {
      return libsbml::RenderExtension::getXmlnsL3V1V1();
    }
  };

  class RenderCaster {
  public:
    RenderCaster() {}

    libsbml::RenderListOfLayoutsPlugin* castToRenderListOfLayoutsPlugin(libsbml::SBasePlugin* p) {
      libsbml::RenderListOfLayoutsPlugin* result = dynamic_cast<libsbml::RenderListOfLayoutsPlugin*>(p);
      assert(result && "Cast to render list of layouts plugin failed");
      return result;
    }

    libsbml::RenderLayoutPlugin* castToRenderLayoutPlugin(libsbml::SBasePlugin* p) {
      libsbml::RenderLayoutPlugin* result = dynamic_cast<libsbml::RenderLayoutPlugin*>(p);
      assert(result && "Cast to render layout plugin failed");
      return result;
    }
  };

}
