const Express = require('express');
const morgan = require('morgan');
const path = require('path');

const armoryApiV1 = require('./armory_api/v1');

const app = Express();
const port = process.env.PORT || 8080;

const STATIC_RESOURCES_PATH = path.resolve(__dirname, 'static');
const ARMORY_CLIENT_PATH = path.resolve(STATIC_RESOURCES_PATH, 'armory', 'index.html');
const ARENA_CLIENT_PATH = path.resolve(STATIC_RESOURCES_PATH, 'arena', 'index.html');

// use morgan to log requests to the console
app.use(morgan('dev'));

/// Armory Client.
app.get([
  '/armory',
], (_, res) => res.sendFile(ARMORY_CLIENT_PATH));

/// Armory API
app.use('/armory/api/v1', armoryApiV1);

/// Arena Client.
app.get([
  '/arena',
], (_, res) => res.sendFile(ARENA_CLIENT_PATH));

/// Static resources.
app.use('/static', Express.static(STATIC_RESOURCES_PATH));

/// Start-up Script.
(async () => {
  app.listen(port, () => {
    console.log(`\n\nServing @ http://localhost:${port}/`)
  });
})();