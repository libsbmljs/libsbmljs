# libsbml.js

This repository hosts the build scripts for libsbml.js, a WebAssembly / JavaScript wrapper for the C++ library [libSBML](http://sbml.org/Software/libSBML). You can use the included Gradle script to build a custom libsbml.js against any libsbml release or checkout (but note that the wrapper is designed for libSBML 5.17.x and may break for older/newer versions).

## Project Structure

* The `interface/idl` directory contains all IDL wrapper code.
  * The `cpp` and `js` subdirectories in the `interface` directory contain additional C++ and JavaScript helper methods.
* The `karma/tests` directory contains scripts for testing libsbml.js in your browser via [Karma](http://karma-runner.github.io/latest/index.html).
* The `emtools` directory contains a patched version of the Emscripten WebIDL binder which enables wrapping the C++ `std::string` type (the original WebIDL binder could only wrap raw `char*` pointers).

## Building

What you will need before starting:

* Git (2.4.11 or later)
* SVN (1.8.15 or later) (if you want to build libSBML from svn)
* CMake (3.12.1 or later)
* Gradle (5.1.1 or later)
* [Emscripten SDK](https://kripken.github.io/emscripten-site/docs/getting_started/downloads.html) (1.38.21 or later)

1. Activate the Emscripten SDK using the command
```
source /path/to/emsdk_env.sh
```

1. Obtain the Expat XML parser source code and store it in a directory named `expat` inside this directory.
  * You can obtain the source code via git or download a release and unpack into the `expat` directory. Example:
```
wget https://github.com/libexpat/libexpat/releases/download/R_2_2_6/expat-2.2.6.tar.bz2
mkdir expat
tar -xf expat-2.2.6.tar.bz2 -C expat --strip-components=1
```

1. Obtain the libSBML source code and store it in a directory named `libsbml` inside this directory.
  * Checkout libSBML via svn or download one of the releases (stable or experimental) and unpack into the `libsbml` directory. For example, to checkout the experimental branch,
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

## Testing with Karma

The libsbml.js wrapper can be tested in the browser using [Karma](http://karma-runner.github.io/latest/index.html).
You must first build libsbml.js from source as described above.

What you will need before starting:

* Node (10.15.0 or later)

How to run testing with Karma:

1. First run

```
npm install
```

1. Now you should be able to run the tests using

```
./node_modules/karma/bin/karma start
```

The wrapper will be tested using Firefox. To test with other browsers, edit `karma.conf.js` and add the desired browsers.

## FAQ

* Is compression support for SBML models built-in?
  * No. We have tried to minimize the size of the generated WASM binary by excluding non-essential components. You can easily compress your hosted SBML models using (HTTP compression)[https://developer.mozilla.org/en-US/docs/Web/HTTP/Compression] without all of the downsides mentioned above.
