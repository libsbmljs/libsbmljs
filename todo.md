* Need to support CV terms and SBO terms in some sort of root interface
* model: getNumConstraints, getNumInitialAssignments, getNumFunctionDefinitions, getNumEvents, displayedModeNumRules, getNumSpeciesTypes, getNumSpeciesWithBoundaryCondition, getNumUnitDefinitions?
* Wrapper notes: do not wrap low-level XML node access and unnecessary back-pointers (e.g. getModel on every object, creates a dangling pointer problem, very difficult to debug on the web)
