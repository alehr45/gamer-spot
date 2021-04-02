const router = require('express').Router();
const sequelize = require('../config/connection');
const { Category, Product } = require('../models');
// The `/api/categories` endpoint
router.get('/', (req, res) => {
  // find all categories
  Product.findAll({
    attributes: ['price', 'stock', 'product_name', 'category_id'],
  // be sure to include its associated Products
    include: [
      {
        model: Category,
        attributes: ['category_name', 'id'],
      }
    ]
  })
  .then((dbProductData) => {
    const product = dbProductData.map(product => product.get({plain: true }));
    res.render('consoles', {product});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.get('/consoles', (req, res) => {
  // find all categories
  Product.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['price', 'stock', 'product_name', 'category_id'],
  // be sure to include its associated Products
    include: [
      {
        model: Category,
        attributes: ['id', 'category_name'],
      }
    ]
  })
  .then((dbProductData) => {
    const product = dbProductData.map(product => product.get({plain: true }));
    res.render('consoles/2', {product});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
      res.redirect('/');
      return;
  }
  res.render('login');
});
module.exports = router;
router.get('/signup', (req, res) => {
  res.render('signup');
});