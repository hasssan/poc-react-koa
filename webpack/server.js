const path = require('path');

module.exports = {
  target: 'node',
  entry: [
    path.join(__dirname, '/../src/server'),
  ],
  output: {
    path: path.join(__dirname, '/../dist/server'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel?optional[]=runtime'],
        include: path.join(__dirname, '/../src'),
      },
    ],
  },
};
