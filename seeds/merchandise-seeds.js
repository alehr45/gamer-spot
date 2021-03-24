const { Merchandise } = require('../models');

const merchandiseData = [
    {
      merchandise_name: 'Teddy Bear',
      price: 59.99,
      stock: 25,
      category_id: 4,
    },
    {
      merchandise_name: 'T-shirt',
      price: 59.99,
      stock: 25,
      category_id: 4,
    },
    {
      merchandise_name: 'Hat',
      price: 59.99,
      stock: 25,
      category_id: 4,
    }
  ];
  
  const seedMerchandise = () => Merchandise.bulkCreate(merchandiseData);
  
  module.exports = seedMerchandise;