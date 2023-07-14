const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  productName: String,
  productPrice: Number,
  productWeight: Number,
  productSummary: String,
});
const Product = mongoose.model('product', productSchema);

module.exports = Product;
