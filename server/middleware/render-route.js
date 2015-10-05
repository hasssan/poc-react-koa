import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOM from 'react-dom/server';

const { Root, route } = require(path.join(__dirname, '/../../dist/server'));

const template = fs.readFileSync(path.join(__dirname, '/../../src') + '/index.html', 'utf-8')
  .replace(
    '<div id="root"></div>',
    '<div id="root">${content}</div>'
  );

function renderIntoTemplate(name, content) {
  return name
    .replace('${content}', content);
}
export default function *renderRouteMiddleware(next) {
  try {
    const props = yield route(this.request.url);
    const markup = ReactDOM.renderToString(
      <Root routingContext={props} />
    );

    this.body = renderIntoTemplate(template, markup);
  } catch (exception) {
    console.log(exception);
    yield next;
  }
}
