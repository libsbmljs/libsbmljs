// Karma configuration
// Generated on Sat Feb 02 2019 16:15:22 GMT-0800 (PST)

// https://github.com/babel/karma-babel-preprocessor

// https://stackoverflow.com/questions/38573690/uncaught-referenceerror-require-is-not-defined-on-karma-start-karma-conf-js/38579355

// https://stackoverflow.com/questions/22421857/error-no-provider-for-frameworkjasmine-resolving-frameworkjasmine

var path = require('path');
const webpack = require('webpack');
// var entry = path.resolve(webpackConfig.context, webpackConfig.entry);
// var preprocessors = {};
// preprocessors[entry] = ['webpack'];
// preprocessors = ['webpack']

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    frameworks: ['jasmine'],

    mime: {
     'application/wasm': ['wasm']
    },

    // https://github.com/webpack/webpack-dev-middleware/issues/229
    files: [
      {pattern: 'build/libsbml.wasm', watched: false, served: true, included: false, type: 'wasm'},
      {pattern: 'karma/models/*.xml', watched: false, served: true, included: false},
      'build/tests/index.js'
    ],

    webpack: {
      mode: 'development',
      resolve: {
        modules: ['build','node_modules']
      },
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
        ]
      },
      devtool: 'inline-source-map',
      plugins: [
        new webpack.IgnorePlugin(/^fs$/)
      ]
    },

    proxies: {
      '/base/build/tests/libsbml.wasm': '/base/build/libsbml.wasm'
    },

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'build/tests/index.js': ['webpack', 'sourcemap']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    concurrency: Infinity,
    plugins:[
      require('karma-webpack'),
      ('karma-jasmine'),
      // ('karma-chai'),
      // ('karma-mocha'),
      // ('karma-chrome-launcher')
      ('karma-firefox-launcher'),
      ('karma-sourcemap-loader'),
    ]
  });
};
