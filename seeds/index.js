const seedAccessories = require('./accessory-seeds');
const seedConsoles = require('./console-seeds');
const seedGames = require('./game-seeds');
const seedMerchandise = require('./merchandise-seeds');
const seedSystems = require('./system-seeds');

const sequelize = require('../config/connection');
const seedSystems = require('./system-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedSystems();
  console.log('\n----- SYSTEMS SEEDED -----\n');

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
