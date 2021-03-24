const seedAccessories = require('./accessory-seeds');
const seedConsoles = require('./console-seeds');
const seedGames = require('./game-seeds');
const seedMerchandise = require('./merchandise-seeds');
const seedCategories = require('./category-seeds');

const sequelize = require('../config/connection');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedAccessories();
  console.log('\n----- ACCESSORIES SEEDED -----\n');

  await seedConsoles();
  console.log('\n----- CONSOLES SEEDED -----\n');

  await seedGames();
  console.log('\n----- GAMES SEEDED -----\n');

  await seedMerchandise();
  console.log('\n----- MERCHANDISE SEEDED -----\n');

  process.exit(0);
};

seedAll();
