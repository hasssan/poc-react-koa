require('babel/register');

const server = require('../server');

server.listen(3000);
console.log('Koa listening on port: 3000');
