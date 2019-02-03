// const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require("path");

console.log('__dirname',__dirname)

module.exports = env => ({
  entry: {
     app: './src/index.js'
  },
  output: {
    // https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url/43212553
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: [path.join(__dirname,'src'), env.LIBSBMLJS_PREFIX, env.DATABASE_PREFIX],
    hot: false
  },
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
