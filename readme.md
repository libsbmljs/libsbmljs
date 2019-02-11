# libsbmljs

This repository hosts the build scripts for libsbmljs, a WebAssembly / JavaScript wrapper for the [libSBML](http://sbml.org/Software/libSBML) C++ library. This repository does not contain libsbmljs itself, but rather the interface wrapper and build scripts used to generate it. It is possible to build a custom libsbmljs against any libsbml release or checkout (but note that the wrapper is designed for libSBML 5.17.x and may not be valid for older/newer versions).

## Project Structure

* The `interface/idl` directory contains all IDL wrapper code.
  * The `cpp` and `js` subdirectories in the `interface` directory contain additional C++ and JavaScript helper methods.
* The `karma/tests` directory contains scripts for testing libsbmljs in your browser via [Karma](http://karma-runner.github.io/latest/index.html).
* The `emtools` directory contains a patched version of the Emscripten WebIDL binder which enables wrapping the C++ `std::string` type (the original WebIDL binder could only wrap raw `char*` pointers).

## Building libsbmljs

It is possible to build a copy of libsbmljs based on a libSBML source tree of your choosing (stable or experimental).

What you will need before starting:

* Git (2.4.11 or later)
* SVN (1.8.15 or later, only if you want to build libSBML from svn)
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

1. Build libsbmljs:
```
gradle emccCompileLibSBML
```
Optionally, you can specify which packages should be enabled/disabled on the command line:
```
gradle -PenableLayout=true -PenableRender=true -PenableFBC=true -PenableMulti=true -PenableQual=true -PenableComp=true -PenableDistrib=true -PenableDyn=true -PenableGroups=true -PenableArrays=true -PenableSpatial=true
```

## Testing with Karma

The libsbmljs wrapper can be tested in the browser using [Karma](http://karma-runner.github.io/latest/index.html).
You must first build libsbmljs from source as described above.

What you will need before starting:

* Node (10.15.0 or later)

How to run testing with Karma:

1. Ensure the npm dependencies are installed:

```
npm install
```

1. You should be able to run the tests using

```
./node_modules/karma/bin/karma start
```

The wrapper will be tested using Firefox. To test with other browsers, edit `karma.conf.js` and add the desired browsers.

## Building the API Documentation

What you will need before starting:

* Node (10.15.0 or later)

1. Ensure the npm dependencies are installed:

```
npm install
```

1. Use the following command to build the documentation using documentationjs.

```
gradle generateDocumentation
```

1. The HTML documentation will be written to the `build/libsbml_apidoc` directory.

## How to Wrap an SBML Extension Package

We provide wrappers for accepted "core" libSBML packages like "fbc" and "comp".
The procedure for adding wrappers for experimental packages is as follows:

* Ensure your `libsbml` directory contains or points to the source tree of the "experimental" branch:

```
svn checkout svn://svn.code.sf.net/p/sbml/code/branches/libsbml-experimental libsbml
```

* The `interface/idl` directory contains wrappers for the respective SBML packages. Create a new subdirectory containing your package name.

* Write the IDL interface code for all the classes you would like to wrap. Each class is wrapped with a IDL `interface` block. Try to have one class per .idl file.
Our documentation engine is [documentation.js](https://documentation.js.org/).

```
/**
 * Document the class using documentation.js syntax.
 * The documentation can usually be copied from libSBML,
 * Replace or remove Doxygen-specific tags like @c, @p, @note.
 */
[Prefix="libsbml::"]
interface MyClassName {
  /**
   * Methods should also be documented using documentation.js syntax.
   *
   * @param {number} n a parameter - IDL uses long to represent the C++ int type
   *
   * @return {string} the return value - DOMStrings are wrap the C++ std::string type
   * (this is different from vanilla Emscripten which can only wrap char*)
   */
  DOMString getSomeStringAttr(unsigned long n);
};
```

* Add your IDL files to the Gradle `combineIDL` task in `build.gradle`.

```
task combineIDL(type: ConcatFiles) {
  ...
  if (enableMyPkg) {
    include Paths.get(idl_dir, "mypkg", "file1.idl")
    include Paths.get(idl_dir, "mypkg", "file2.idl")
    ...
  }
  ...
}
```

* Create a C++ wrapper source file `interface/cpp/mypkg_interface_wrapper.cpp`. At a minimum, this file must include the required headers for your package (usually named MyPkgExtensionTypes.h). You can also include additional C++ helper code in here if needed.

* Add your C++ source file to the `combineCPP` task in `build.gradle`:

```
task combineCPP(type: ConcatFiles) {
  ...
  if (enableMyPkg) {
    include Paths.get(cpp_dir, "mypkg_interface_wrapper.cpp")
  }
  ...
}
```

* Make sure the variable `ext.enableMyPkg` is set to true somewhere in the `build.gradle` file. We suggest setting it as follows:

```
ext.enableMyPkg = findProperty('enableMyPkg') || isExperimentalBranch
```

* Run `gradle --rerun-tasks combineIDL` and build libsbmljs as above. Also consider adding tests for your package to the karma/tests directory (and add those files to the `combineTests` task).

## Contribution Guidelines

We welcome useful contributions, especially wrappers for libSBML experimental packages.
In order to ensure your contribution satisfies the goals of the project, please adhere
to the following:

*

## FAQ

* Are all classes and methods from the libSBML C++ library available in this wrapper.
  * No. We have not included methods involving tasks which we believe to be irrelevant for most JavaScript applications such as: low-level XML node access, unnecessary back-pointers (e.g. getModel on every object), and methods that are deprecated or deal only with older SBML standards (e.g. SBase.isSetId).

* Is compression support for SBML models built-in?
  * No. We have tried to minimize the size of the generated WASM binary by excluding non-essential components. You can easily compress your hosted SBML models using (HTTP compression)[https://developer.mozilla.org/en-US/docs/Web/HTTP/Compression] without all of the downsides mentioned above.
