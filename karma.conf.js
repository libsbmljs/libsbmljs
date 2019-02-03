// Karma configuration
// Generated on Sat Feb 02 2019 16:15:22 GMT-0800 (PST)

// https://github.com/babel/karma-babel-preprocessor

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // https://stackoverflow.com/questions/19117092/jasmine-tests-in-karma-uncaught-referenceerror-require-is-not-defined
    frameworks: ['jasmine', 'browserify'],

    // list of files / patterns to load in the browser
    files: [
      'node_modules/@babel/polyfill/dist/polyfill.js',
      'karma/tests/*.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'karma/tests/*.js': ['browserify', 'babel']
    },

    babelPreprocessor: {
      options: {
        presets: ['@babel/preset-env'],
        sourceMap: 'inline'
      }
    },
    browserify: {
      debug: true,
      transform: [ ['babelify', {presets: ["@babel/preset-env"]}] ],
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
    singleRun: false
  });
};
