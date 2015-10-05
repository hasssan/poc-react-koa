const path = require('path');

module.exports = {
  target: 'web',
  entry: [
    path.join(__dirname, '/../src/client'),
  ],
  output: {
    path: path.join(__dirname, '/../dist/client'),
    filename: 'client.bundle.js',
    publicPath: '/',
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
