const { Accessory } = require('../models');

const accessoryData = [
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
  
  const seedAccessories = () => Accessory.bulkCreate(accessoryData);
  
  module.exports = seedAccessories;