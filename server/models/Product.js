const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    discountPrice: { type: Number }, // Optional field for discounted price
    stock: { type: Number, required: true },
    category: { type: String, required: true },
    subcategory: { type: String }, // New field for subcategory
    image: { type: [String] }, // Array to hold multiple image URLs
    video: { type: String }, // URL or path for product video (optional)
    weight: { type: String }, // Weight of the product
    dimensions: { 
      length: { type: Number },
      width: { type: Number },
      height: { type: Number }
    },
    colorOptions: { type: [String] }, // Array for color variants
    material: { type: String }, // Material or composition details
    brand: { type: String }, // Brand name
    shippingCharges: { type: Number, default: 0 }, // Optional field for shipping cost
    estimatedDeliveryTime: { type: String }, // Delivery time estimate
    safetyWarnings: { type: String }, // Safety warnings if applicable
    isVerified: { type: Boolean, default: false },
    supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
