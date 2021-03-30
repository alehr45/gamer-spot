// Import models
const Category = require('./Category');
const Product = require('./Product');
const User = require('./User');

Product.belongsTo(Category, {
    foreignKey: 'category_id'
});

Category.hasMany(Product, {
    foreignKey: 'category_id'
});

module.exports = {
  Category,
  Products,
  User
};
