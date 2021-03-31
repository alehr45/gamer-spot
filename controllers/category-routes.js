const router = require('express').Router();
const sequelize = require('../config/connection');
const { Category, Product } = require('../models');
router.get('/', (req, res) => {
    // find all categories
    Category.findAll({
      attributes: ['category_name', 'id'],
    // be sure to include its associated Products
      include: [
        {
          model: Product,
          attributes: ['category_id', 'price', 'stock', 'product_name'],
        }
      ]
    })
    .then((dbCategoryData) => {
      const category = dbCategoryData.map(category => category.get({plain: true }));
      res.render('consoles', {category});
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/', (req, res) => {
    // find all categories
    Category.findOne({
    where:{
        id:req.params.id,
    },
      attributes: ['category_name'],
    // be sure to include its associated Products
      include: [
        {
          model: Product,
          attributes: ['category_id', 'price', 'stock', 'product_name'],
        }
      ]
    })
    .then((dbCategoryData) => {
      const category = dbCategoryData.map(category => category.get({plain: true }));
      res.render('consoles', {category});
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  module.exports = router;
router.get('/signup', (req, res) => {
  res.render('signup');
});