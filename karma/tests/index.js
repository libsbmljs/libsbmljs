// https://github.com/webpack/docs/wiki/usage-with-karma
var testsContext = require.context(".", true, /_test$/);
testsContext.keys().forEach(testsContext);
