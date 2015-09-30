const path = require('path');
const app = require('koa')();
const serve = require('koa-static');

app.use(serve(path.resolve(__dirname, 'src')));

app.listen(3000);
console.log('listening http://localhost:3000/');
