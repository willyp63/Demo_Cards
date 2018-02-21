const Express = require('express');
const morgan = require('morgan');
const path = require('path');

const apiV1 = require('./routes/api/v1');

const app = Express();
const port = process.env.PORT || 8080;
const STATIC_RESOURCES_PATH = path.resolve(__dirname, 'static');
const REACT_APP_PATH = path.resolve(STATIC_RESOURCES_PATH, 'index.html');

// use morgan to log requests to the console
app.use(morgan('dev'));

/// API
app.use('/api/v1', apiV1);

/// Static resources.
app.use('/static', Express.static(STATIC_RESOURCES_PATH));

/// React App.
app.get([
  '/',
  /* All React App routes must go hear */
], (_, res) => res.sendFile(REACT_APP_PATH));

/// Unused routes.
app.get('/*', (_, res) => res.end('Nothing to see here ...'));

/// Start-up Script.
(async () => {
  app.listen(port, () => {
    console.log(`\n\nServing @ http://localhost:${port}/`)
  });
})();