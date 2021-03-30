const router = require('express').Router();
const sequelize = require('../config/connection');
const { Category, Product } = require('../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Product.findAll({
    attributes: ['category_id', 'price', 'stock', 'product_name'],
  // be sure to include its associated Products
    include: [
      {
        model: Category,
        attributes: ['category_name']        
      }
    ]
  })
  .then((dbCategoryData) => {
    const category = dbCategoryData.map(category => category.get({plain: true }));
    res.render('homepage', {category});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.get('/', (req, res) => {
  // find all categories
  Category.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'category_name'],
  // be sure to include its associated Products
    include: [
      {
        model: Product,
        attributes: ['category_id', 'price', 'stock', 'product_name']
      }
    ]
  })
  .then((dbCategoryData) => {
    const category = dbCategoryData.map(category => category.get({plain: true }));
    res.render('homepage', {category});
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
