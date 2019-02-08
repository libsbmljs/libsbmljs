* Need to support CV terms and SBO terms in some sort of root interface
* Need to wrap:
  * InitialAssignment
  * SpeciesType
  * User functions
* model: getNumConstraints, getNumInitialAssignments, getNumFunctionDefinitions, displayedModeNumRules, getNumSpeciesTypes, getNumSpeciesWithBoundaryCondition, getNumUnitDefinitions?
* setUnits with string apparently only works for level 1
* Wrapper notes: do not wrap
  * low-level XML node access
  *  unnecessary back-pointers (e.g. getModel on every object, creates a dangling pointer problem, very difficult to debug on the web)
  * deprecated methods like SBase.isSetId
  * Methods that encourage haphazard passing around of pointers like addUnit etc. which are more dangerous than usual in this environment. We have createUnit instead.
  * ListOfX objects - these are not needed due to the fact that all objects accept getX methods with an index
* Examples:
  * Basic reading
  * Async reading
  * Basic writing
  * writing CV & SBO terms
  * writing Fancy math and units?
  * writing events
  * Packages
