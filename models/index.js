// Import models
const Category = require('./Category');
const Product = require('./Product');

Product.belongsTo(Category, {
    foreignKey: 'category_id'
});

Category.hasMany(Product, {
    foreignKey: 'category_id'
});

module.exports = {
  Category,
  Product
};
