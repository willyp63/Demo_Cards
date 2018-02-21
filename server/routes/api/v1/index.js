const router = require('express').Router();
const bodyParser = require('body-parser');

/// JSON API
router.use(bodyParser.json());
router.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});

/// Routes
// router.use('/user', user);

module.exports = router;