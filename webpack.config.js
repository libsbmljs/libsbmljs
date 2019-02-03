// const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require("path");

console.log('__dirname',__dirname)

module.exports = env => ({
  resolve: {
    modules: ['/extra/devel/src/libsbml.js/build ','node_modules']
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
  plugins: [
    new webpack.IgnorePlugin(/^fs$/)
  ]
})
