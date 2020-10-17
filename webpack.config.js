var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  optimization: {
    minimize: false,
  },
  module : {
    rules : [
      {
          test: /\.js?/,
          use: {
              loader: 'babel-loader'
          },
          exclude: /node_modules/
      },
    ]
  },
  externals: {
    lodash: 'this _'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'main.js'
  },
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/index.html'
  })]
}
