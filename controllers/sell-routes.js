const router = require('express').Router();
const sequelize = require('../config/connection');
const { Category, Product } = require('../models');
// The `/consoles` endpoints
router.get('/', (req, res) => {
  // find all products
  Product.findAll({
    attributes: ['category_id', 'price', 'stock', 'product_name'],
    include: [
      {
        model: Category,
        attributes: ['category_name', 'id'],
      }
    ]
  })
  .then((dbProductData) => {
    const product = dbProductData.map(product => product.get({plain: true }));
    res.render('sell', {product});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/sell/:id', (req, res) => {
  // find one product
  Product.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['category_id', 'price', 'stock', 'product_name'],
    include: [
      {
        model: Category,
        attributes: ['id', 'category_name'],
      }
    ]
  })
  .then((dbProductData) => {
    const product = dbProductData.map(product => product.get({plain: true }));
    res.render('sell', {product});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/', (req, res) => {
    // find all categories
    Category.findAll({
        attributes: ['category_name', 'id'],
        include: [
        {
            model: Product,
            attributes: ['category_id', 'price', 'stock', 'product_name'],
        }
        ]
    })
    .then((dbCategoryData) => {
        const category = dbCategoryData.map(category => category.get({plain: true }));
        res.render('sell', {category});
        })
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


router.get('/sell/:id', (req, res) => {
    // find one category
    Category.findOne({
    where:{
        id:req.params.id,
    },
        attributes: ['category_name'],
        include: [
        {
            model: Product,
            attributes: ['category_id', 'price', 'stock', 'product_name'],
        }
        ]
    })
    .then((dbCategoryData) => {
        const category = dbCategoryData.map(category => category.get({plain: true }));
        res.render('sell', {category});
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
router.get('/signup', (req, res) => {
  res.render('signup');
});
module.exports = router;