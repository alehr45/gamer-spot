const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('games')
});

module.exports = router;