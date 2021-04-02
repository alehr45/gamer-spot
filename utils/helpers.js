const id = require('../models/Category')
const category_id = require('../models/Product')

module.exports = {
    is_equal: (product, category_id) => {
        if (id === category_id) {
          return true
        }
    }
}
