var app = require('koa')();

app.use(function* () {
  const req = this.request;
  const path = req.path;
  const type = req.type;
  const charset = req.charset;
  const query = req.query;
  const ip = req.ip;

  this.body = `
    <html>
    <title>POC Koa+React</title>
    <body>
      path: ${path}<br />
      query: ${query.query}<br />
      type: ${type}<br />
      charset: ${charset}<br />
      ip: ${ip}<br />
    </body>
    </html>
  `;
});

app.listen(3000);
console.log('listening http://localhost:3000/');
