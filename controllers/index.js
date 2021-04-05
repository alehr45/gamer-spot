const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const consoleRoutes = require('./console-routes.js');
const gameRoutes = require('./game-routes.js')
const accessoryRoutes = require('./accessory-routes.js')
const merchRoutes = require('./merchandise-routes.js')
const sellRoutes = require('./sell-routes.js')


router.use('/api', apiRoutes);
router.use('/consoles', consoleRoutes);
router.use('/', homeRoutes);
router.use('/games', gameRoutes);
router.use('/merchandise', merchRoutes);
router.use('/accessories', accessoryRoutes);
router.use('/sell', sellRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;