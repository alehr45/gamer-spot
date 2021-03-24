const { Accessory } = require('../models');

const accessoryData = [
    {
        accessory_name: 'xbox controller',
        price: 1.99,
        stock: 13,
        console_id: 1,
        category_id: 1
    },
    {
        accessory_name: 'xbox headset',
        price: 1.99,
        stock: 13,
        console_id: 1,
        category_id: 1
    },
    {
        accessory_name: 'xbox controller battery-pack',
        price: 1.99,
        stock: 13,
        console_id: 1,
        category_id: 1
    },
    {
        accessory_name: 'xbox battery charging station',
        price: 1.99,
        stock: 13,
        console_id: 1,
        category_id: 1
    },
    {
        accessory_name: 'playstation controller',
        price: 1.99,
        stock: 13,
        console_id: 1,
        category_id: 1
    },
    {
        accessory_name: 'playstation headset',
        price: 1.99,
        stock: 13,
        console_id: 1,
        category_id: 1
    },
    {
        accessory_name: 'playstation controller battery-pack',
        price: 1.99,
        stock: 13,
        console_id: 1,
        category_id: 1
    },
    {
        accessory_name: 'playstation battery charging station',
        price: 1.99,
        stock: 13,
        console_id: 1,
        category_id: 1
    },
    {
        accessory_name: 'nintendo controller',
        price: 1.99,
        stock: 13,
        console_id: 1,
        category_id: 1
    },
    {
        accessory_name: 'nintendo headset',
        price: 1.99,
        stock: 13,
        console_id: 1,
        category_id: 1
    },
    {
        accessory_name: 'nintendo charging station',
        price: 1.99,
        stock: 13,
        console_id: 1,
        category_id: 1
    }
  ];
  
  const seedAccessories = () => Accessory.bulkCreate(accessoryData);
  
  module.exports = seedAccessories;