const Product = require(`${__dirname}/../models/productModel.js`);
const APIFeatures = require(`${__dirname}/../utils/APIFeatures`);

exports.getAllProducts = async (req, res) => {
  try {
    const query = new APIFeatures(Product.find(), req.query).filter().sort().pagination().limitFields();
    const products = await query.query;

    res.status(200).json({
      status: 'success',
      length: products.length,
      data: {
        products,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        product,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};
