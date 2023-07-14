const fs = require('fs');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Product = require(`${__dirname}/../models/productModel.js`);

dotenv.config({ path: './config.env' });

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Connected to database...');
  });

const products = JSON.parse(fs.readFileSync(`${__dirname}/../data/products.json`), 'utf-8');

const importData = async () => {
  try {
    await Product.create(products);
    console.log('All products imported successfully');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await Product.deleteMany();
    console.log('All products deleted successfully');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv.indexOf('--import') >= 0) {
  importData();
} else if (process.argv.indexOf('--delete') >= 0) {
  deleteData();
}
