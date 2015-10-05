const path = require('path');
const app = require('koa')();
const serve = require('koa-static');

app.use(serve(path.join(__dirname, '/../dist/client'), {
  index: '__IGNORE_INDEX.HTML__',
}));

app.use(require('./middleware/render-route'));

export default app;
