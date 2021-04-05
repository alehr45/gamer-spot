module.exports = {
    is_equal: (product, category_id) => {
        if (product === category_id) {
          return true
        }
    },

    is_same: (product, product_id) => {
        if (product === product_id) {
          return true
        }
    }
}
