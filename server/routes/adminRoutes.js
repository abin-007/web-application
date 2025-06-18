const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  verifyProduct,
  unverifyProduct,
} = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');
const { getSuppliers, verifySupplier } = require('../controllers/supplierController');

// Route to get all suppliers
router.get('/suppliers',authMiddleware, getSuppliers);

// Route to verify a supplier
router.post('/suppliers/verify/:id',authMiddleware, verifySupplier);

// Get all products
router.get('/products', getAllProducts);

// Verify a product
router.put('/products/:id/verify', verifyProduct);

// Unverify a product
router.put('/products/:id/unverify', unverifyProduct);

module.exports = router;
