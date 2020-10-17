var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  optimization: {
    minimize: false,
  },
  externals: {
    lodash: '_'
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
