require('babel/register');

module.exports = [
  require('./webpack/client'),
  require('./webpack/server'),
];
