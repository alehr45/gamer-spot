const { Merchandise } = require('../models');

const merchandiseData = [
    {
      system_name: 'Microsoft',
    },
    {
      system_name: 'Sony',
    },
    {
      system_name: 'Nintendo',
    }
  ];
  
  const seedMerchandise = () => Merchandise.bulkCreate(merchandiseData);
  
  module.exports = seedMerchandise;