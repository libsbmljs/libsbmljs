#include "sbml/SBMLDocument.h"
#include "sbml/Model.h"
#include "sbml/extension/SBasePlugin.h"
#include "sbml/extension/SBMLDocumentPlugin.h"
#include "sbml/packages/multi/common/MultiExtensionTypes.h"

LIBSBML_CPP_NAMESPACE_BEGIN

typedef ::BindingStatus_t BindingStatus_t;
typedef ::Relation_t Relation_t;
// typedef enum
// {
//     MULTI_BINDING_STATUS_BOUND /** The status of the OutwardBindingSite is 'bound'. */
//   , MULTI_BINDING_STATUS_UNBOUND /** The status of the OutwardBindingSite is 'unbound'. */
//   , MULTI_BINDING_STATUS_EITHER /** The status of the OutwardBindingSite is either 'bound' or 'unbound'. */
//   , MULTI_BINDING_STATUS_UNKNOWN /** The status of the OutwardBindingSite is unknown.  This value is not permitted for valid SBML models. */
// } BindingStatus_t;
//
// typedef enum
// {
//     MULTI_RELATION_AND     /** The SpeciesFeature children of the SubListOfSpeciesFeatures share an 'and' relationship. */
//   , MULTI_RELATION_OR      /** The SpeciesFeature children of the SubListOfSpeciesFeatures share an 'or' relationship. */
//   , MULTI_RELATION_NOT     /** The SpeciesFeature children of the SubListOfSpeciesFeatures share a 'not' relationship. */
//   , MULTI_RELATION_UNKNOWN /** The SpeciesFeature children of the SubListOfSpeciesFeatures share an unknown relationship.  This value is not permitted for valid SBML models. */
// } Relation_t;

LIBSBML_CPP_NAMESPACE_END
