const Product=require("../modles/ProductModles");



//Create Product

exports.createProduct = async (req, res, next) => {
    try {
      const createdProduct = await Product.create(req.body); // Use the Product model to create a new product
      res.status(201).json({
        success: true,
        product: createdProduct,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  };



exports.getAllProducts=( req,res)=>{
    res.status(200). json({message:"Route is working fine"})
}

// module.exports={
//     getAllProducts
// }