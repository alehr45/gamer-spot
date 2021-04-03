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

Product.belongsTo(User, {
  constraints: true,
  onDelete: 'CASCADE'
});


module.exports = {
  Category,
  Product,
  User
};

