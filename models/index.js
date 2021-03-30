// Import models
const Accessory = require('./Accessory');
const Category = require('./Category');
const Console = require('./Console');
const Game = require('./Game');
const Merchandise = require('./Merchandise');
const User = require('./User');

Console.belongsTo(Category, {
    foreignKey: 'category_id'
});
Accessory.belongsTo(Category, {
    foreignKey: 'category_id'
});
Game.belongsTo(Category, {
    foreignKey: 'category_id'
});
Merchandise.belongsTo(Category, {
    foreignKey: 'category_id'
});

// Category
Category.hasMany(Console, {
    foreignKey: 'category_id'
});
Category.hasMany(Accessory, {
    foreignKey: 'category_id'
});
Category.hasMany(Game, {
    foreignKey: 'category_id'
});
Category.hasMany(Merchandise, {
    foreignKey: 'category_id'
});

module.exports = {
  Accessory,
  Category,
  Console,
  Game,
  Merchandise,
  User
};
