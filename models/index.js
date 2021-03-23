// import models
const Accessory = require('./Accessory');
const Category = require('./Category');
const Console = require('./Console');
const Game = require('./Game');
const Merchandise = require('./Merchandise');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
});

module.exports = {
  Accessory,
  Category,
  Console,
  Game,
  Merchandise
};
