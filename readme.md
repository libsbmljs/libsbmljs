## Preliminaries

What you will need before starting (minimum version):

* Git (2.4.11)
* SVN (1.8.15)
* CMake (3.12.1)
* Gradle (5.1.1)

## Instructions

1. Download the [Emscripten SDK](https://kripken.github.io/emscripten-site/docs/getting_started/downloads.html) and activate it using the command
```
source /path/to/emsdk_env.sh
```

1. Obtain the Expat XML parser source code
  * You can obtain the source code via git clone or download a release and unpack into the `expat` directory. Example:
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

## Testing with Karma

The libsbml.js wrapper can be tested in the browser using [Karma](http://karma-runner.github.io/latest/index.html).

What you will need before starting (minimum version):
* Node (10.15.0)

1. First run

```
npm install
```

1. Now you should be able to run the tests using

```
./node_modules/karma/bin/karma start
```

The wrapper will be tested using Firefox. To test with other browsers, edit `karma.conf.js` and add the desired browsers.
