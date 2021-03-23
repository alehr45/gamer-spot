const { System } = require('../models');

const systemData = [
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

const seedSystems = () => System.bulkCreate(systemData);

module.exports = seedSystems;