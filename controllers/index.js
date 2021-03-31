const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const consoleRoutes = require('./console-routes.js');

router.use('/api', apiRoutes);
router.use('/consoles', consoleRoutes);
router.use('/', homeRoutes);
router.use('/consoles', consoleRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;