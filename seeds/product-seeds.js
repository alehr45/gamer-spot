const { Product } = require('../models');

const productData = [
  {
    product_name: 'Xbox Series S',
    price: 299.99,
    stock: 13,
    category_id: 2,
  },
  {
    product_name: 'Xbox Series X',
    price: 499.99,
    stock: 18,
    category_id: 2,
  },
  {
    product_name: 'Playstation 4 Pro',
    price: 389.99,
    stock: 10,
    category_id: 2,
  },
  {
    product_name: 'Playstation 5',
    price: 499.99,
    stock: 14,
    category_id: 2,
  },
  {
    product_name: 'Nintendo Switch',
    price: 299.99,
    stock: 20,
    category_id: 2,
  },
  {
    product_name: 'Nintendo Switch Lite',
    price: 199.99,
    stock: 35,
    category_id: 2,
  },
  {
    product_name: 'Teddy Bear',
    price: 59.99,
    stock: 25,
    category_id: 4,
  },
  {
    product_name: 'T-shirt',
    price: 59.99,
    stock: 25,
    category_id: 4,
  },
  {
    product_name: 'Hat',
    price: 59.99,
    stock: 25,
    category_id: 4,
  },
  {
    product_name: 'The Legend of Zelda: Breath of the Wild',
    price: 59.99,
    stock: 14,
    console_id: [5, 6],
    category_id: 3,
  },
  {
    product_name: 'Super Mario Odyssey',
    price: 59.99,
    stock: 14,
    console_id: [5, 6],
    category_id: 3,
  },
  {
    product_name: 'Animal Crossing: New Horizons',
    price: 55.99,
    stock: 14,
    console_id: [5, 6],
    category_id: 3,
  },
  {
    product_name: 'Mario Kart 8 Deluxe',
    price: 59.99,
    stock: 14,
    console_id: [5, 6],
    category_id: 3,
  },
  {
    product_name: 'Fire Emblem: Three Houses',
    price: 52.93,
    stock: 14,
    console_id: [5, 6],
    category_id: 3,
  },
  {
    product_name: 'Tetris 99',
    price: 14.99,
    stock: 14,
    console_id: [5, 6],
    category_id: 3,
  },
  {
    product_name: 'Pokemon Sword and Shield',
    price: 59.95,
    stock: 14,
    console_id: [5, 6],
    category_id: 3,
  },
  {
    product_name: 'Super Smash Bros. Ultimate',
    price: 14.99,
    stock: 14,
    console_id: [5, 6],
    category_id: 3,
  },
  {
    product_name: "Luigi's Mansion 3",
    price: 14.99,
    stock: 14,
    console_id: [5, 6],
    category_id: 3,
  },
  {
    product_name: "Legend of Zelda: Link's Awakening",
    price: 14.99,
    stock: 14,
    console_id: [5, 6],
    category_id: 3,
  },
  {
    product_name: "Assassin's Creed Valhalla",
    price: 59.99,
    stock: 25,
    console_id: [3, 4],
    category_id: 3,
  },
  {
    product_name: "Astro's Playroom",
    price: 90.0,
    stock: 25,
    console_id: 4,
    category_id: 3,
  },
  {
    product_name: 'Call of Duty: Black Ops Cold War',
    price: 69.99,
    stock: 25,
    console_id: [3, 4],
    category_id: 3,
  },
  {
    product_name: "No Man's Sky",
    price: 59.99,
    stock: 25,
    console_id: 3,
    category_id: 3,
  },
  {
    product_name: 'Destiny 2',
    price: 0.00,
    stock: 25,
    console_id: [3, 4],
    category_id: 3,
  },
  {
    product_name: 'Devil May Cry 5 Special Edition',
    price: 90.0,
    stock: 25,
    console_id: [3, 4],
    category_id: 3,
  },
  {
    product_name: 'Dirt 5',
    price: 90.0,
    stock: 25,
    console_id: [3, 4],
    category_id: 3,
  },
  {
    product_name: 'NBA 2K21',
    price: 90.0,
    stock: 25,
    console_id: [3, 4],
    category_id: 3,
  },
  {
    product_name: 'Spider-Man: Miles Morales',
    price: 90.0,
    stock: 25,
    console_id: [3, 4],
    category_id: 3,
  },
  {
    product_name: 'Watch Dogs: Legion',
    price: 90.0,
    stock: 25,
    console_id: [3, 4],
    category_id: 3,
  },
  {
    product_name: 'The Witcher 3: Wild Hunt - Game of the Year Edition',
    price: 59.99,
    stock: 14,
    console_id: [1, 2, 3],
    category_id: 3,
  },
  {
    product_name: 'Call Of Duty: Modern Warfare',
    price: 59.99,
    stock: 14,
    console_id: [1, 2, 3],
    category_id: 3,
  },
  {
    product_name: 'Xbox Controller',
    price: 39.99,
    stock: 13,
    console_id: 1,
    category_id: 1
},
{
    product_name: 'Xbox Headset',
    price: 89.99,
    stock: 13,
    console_id: 1,
    category_id: 1
},
{
    product_name: 'Xbox Controller Battery-Pack',
    price: 11.99,
    stock: 13,
    console_id: 1,
    category_id: 1
},
{
    product_name: 'Xbox Battery Charging Station',
    price: 29.99,
    stock: 13,
    console_id: 1,
    category_id: 1
},
{
    product_name: 'Playstation Controller',
    price: 49.99,
    stock: 13,
    console_id: 1,
    category_id: 1
},
{
    product_name: 'Playstation Headset',
    price: 69.99,
    stock: 13,
    console_id: 1,
    category_id: 1
},
{
    product_name: 'Playstation Controller Battery-Pack',
    price: 19.99,
    stock: 13,
    console_id: 1,
    category_id: 1
},
{
    product_name: 'Playstation Battery Charging Station',
    price: 1.99,
    stock: 13,
    console_id: 1,
    category_id: 1
},
{
    product_name: 'Nintendo Controller',
    price: 39.99,
    stock: 13,
    console_id: 1,
    category_id: 1
},
{
    product_name: 'Nintendo Headset',
    price: 29.99,
    stock: 13,
    console_id: 1,
    category_id: 1
},
{
    product_name: 'Nintendo Charging Station',
    price: 49.99,
    stock: 13,
    console_id: 1,
    category_id: 1
},
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;