const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  productName: String,
  productPrice: String,
  productWeight: String,
  productSummary: String,
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;
