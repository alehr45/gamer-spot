const { Console } = require('../models');

const consoleData = [
  {
    console_name: 'Xbox Series S',
    price: 299.99,
    stock: 13,
    category_id: 2,
  },
  {
    console_name: 'Xbox Series X',
    price: 499.99,
    stock: 18,
    category_id: 2,
  },
  {
    console_name: 'Playstation 4 Pro',
    price: 389.99,
    stock: 10,
    category_id: 2,
  },
  {
    console_name: 'Playstation 5',
    price: 499.99,
    stock: 14,
    category_id: 2,
  },
  {
    console_name: 'Nintendo Switch',
    price: 299.99,
    stock: 20,
    category_id: 2,
  },
  {
    console_name: 'Nintendo Switch Lite',
    price: 199.99,
    stock: 35,
    category_id: 2,
  },
];

const seedConsoles = () => Console.bulkCreate(consoleData);

module.exports = seedConsoles;