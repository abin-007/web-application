const Product = require('../models/Product');

// Add a new product

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      discountPrice,        // Added discountPrice field
      stock,
      category,
      subcategory,          // Added subcategory field
      weight,               // Added weight field
      dimensions,           // Added dimensions field
      colorOptions,         // Added colorOptions field
      material,             // Added material field
      brand,                // Added brand field
      shippingCharges,      // Added shippingCharges field
      estimatedDeliveryTime, // Added estimatedDeliveryTime field
      safetyWarnings        // Added safetyWarnings field
    } = req.body;

    console.log(req.files.image);
    

    const image = req.files ? req.files.image.map(file => file.path) : []; // Handling multiple image files
    const video = req.file ? req.file.path : null; // Handling video file

    // Check if all required fields are provided
    if (!name || !description || !price || !stock || !category) {
      return res.status(400).json({ message: 'Please fill out all required fields' });
    }

    // Create a new product with the supplier ID from the authenticated user
    const newProduct = new Product({
      name,
      description,
      price,
      discountPrice,        // Include discountPrice in the new product
      stock,
      category,
      subcategory,          // Include subcategory in the new product
      image,
      video,
      weight,
      dimensions,           // Include dimensions in the new product
      colorOptions,
      material,
      brand,
      shippingCharges,
      estimatedDeliveryTime,
      safetyWarnings,
      supplier: req.user.id, // Supplier is the authenticated user
    });

    // Save the new product to the database
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// Get all products for a supplier
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({ supplier: req.user.id });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addProduct, getProducts, deleteProduct };
