const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Accessories',
  },
  {
    category_name: 'Consoles',
  },
  {
    category_name: 'Games',
  },
  {
    category_name: 'Merchandise',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;