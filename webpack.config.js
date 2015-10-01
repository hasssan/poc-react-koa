var path = require('path');
var webpack = require('webpack');
module.exports = {
  devtool: 'eval',
  entry: [
    './src/client'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel?optional[]=runtime'],
        include: path.join(__dirname, 'src')
      }
    ]
  }
}
