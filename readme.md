## Preliminaries

What you will need:
* Git
* SVN
* CMake

## Instructions

1. Download the [Emscripten SDK](https://kripken.github.io/emscripten-site/docs/getting_started/downloads.html) and activate it using the command
```
source /path/to/emsdk_env.sh
```

1. Obtain the Expat XML parser source code
  * Obtain the source code via git clone or download a release and unpack into the `expat` directory. Example:
```
wget https://github.com/libexpat/libexpat/releases/download/R_2_2_6/expat-2.2.6.tar.bz2
mkdir expat
tar -xf expat-2.2.6.tar.bz2 -C expat --strip-components=1
```

1. Obtain libsbml source code
  * Checkout libsbml via svn or download one of the releases (stable or experimental) and unpack into the `libsbml` directory. For example, to checkout the experimental branch,
```
svn checkout svn://svn.code.sf.net/p/sbml/code/branches/libsbml-experimental libsbml
```

1. Build libsbml.js:
```
gradle
```
Optionally, you can specify which packages should be enabled/disabled on the command line:
```
gradle -PenableLayout=true -PenableRender=true -PenableFBC=true -PenableMulti=true -PenableQual=true -PenableComp=true -PenableDistrib=true -PenableDyn=true -PenableGroups=true -PenableArrays=true -PenableSpatial=true
```
