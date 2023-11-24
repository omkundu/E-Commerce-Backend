const Product = require("../modles/ProductModles");

//Create Product -- Admin

exports.createProduct = async (req, res, next) => {
  try {
    const createdProduct = await Product.create(req.body); // Use the Product model to create a new product
    res.status(201).json({
      success: true,
      product: createdProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

//Get All Products
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ success: true, products });
};

//update product -- Admin

exports.updateProduct = async (req, res, next) => {
    try {
      let product = await Product.findById(req.params.id);
  
      if (!product) {
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
      }
  
      product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
  
      res.status(200).json({
        success: true,
        product,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  };
  
