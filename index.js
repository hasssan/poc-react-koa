require("babel/register");

const fs = require('fs');
const path = require('path');
const app = require('koa')();
const serve = require('koa-static');
const markup = require('./src/server');

app.use(serve(path.join(__dirname, 'dist'), {
  index: '__IGNORE_INDEX.HTML__'
}));

const template = fs.readFileSync(path.join(__dirname, 'src') + '/index.html', 'utf-8')
  .replace(
    '<div id="root"></div>',
    '<div id="root">' + markup + '</div>'
  );

app.use(function *() {
  this.body = template;
})

app.listen(3000);
console.log('listening http://localhost:3000/');
