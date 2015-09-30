var webpack = require('webpack');
var devServer = require('webpack-dev-server');
var config = require('./webpack.config');

new devServer(webpack(config), {
  publicPath: config.output.publicPath
}).listen(3001, 'localhost', function(err, result) {
  if (err) {
    console.log(err);
  }

  console.log('listening localhost:3001');
})
