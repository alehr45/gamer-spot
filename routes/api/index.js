const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const consoleRoutes = require('./console-routes');
const accessoryRoutes = require('./accessory-routes');
const gameRoutes = require('./game-routes');
const merchandiseRoutes = require('./merchandise-routes');

router.use('/categories', categoryRoutes);
router.use('/consoles', consoleRoutes);
router.use('/accessories', accessoryRoutes);
router.use('/games', gameRoutes);
router.use('/merchandise', merchandiseRoutes);

module.exports = router;
