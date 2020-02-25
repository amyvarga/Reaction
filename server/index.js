import path from 'path';
import fs from 'fs';
import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import Server from '../src/components/Server';
import Routes from '../src/routes';

const PORT = process.env.PORT || 3006;
const app = express();

app.use(express.static(path.resolve(__dirname, "../build")));
app.get('/*', (req, res) => {
  const currentRoute = Routes.find(route => matchPath(req.url, route)) || {};
  let promise;
  if (currentRoute.loadData) {
    promise = currentRoute.loadData();
  } else {
    promise = Promise.resolve(null);
  }
  promise.then(data => {
    const reactDom = renderToString(
      <StaticRouter context={data} location={req.url}>
        <Server />
      </StaticRouter>
    );
    const indexFile = path.resolve("./build/index.html");
    fs.readFile(indexFile, 'utf8', (err, indexData) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
      }
      return res.send(
        indexData
          .replace('<div id="root"></div>', `<div id="root">${reactDom}</div>`)
          .replace(
            '</body>',
            `<script>window.__ROUTE_DATA__ = ${data}</script></body>`
          )
      );
    });
  });
});

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});