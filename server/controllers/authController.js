// backend/controllers/authController.js
const User = require('../models/User');
const generateToken = require('../utils/generateToken');

// Register a new user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isSupplier: user.isSupplier,
      isVerified: user.isVerified,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: 'Invalid user data' });
  }
};

// Register a new supplier
const registerSupplier = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: 'Supplier already exists' });
  }

  const supplier = await User.create({
    name,
    email,
    password,
    isSupplier: true,
  });

  if (supplier) {
    res.status(201).json({
      _id: supplier._id,
      name: supplier.name,
      email: supplier.email,
      isSupplier: supplier.isSupplier,
      isVerified: supplier.isVerified,
      token: generateToken(supplier._id),
    });
  } else {
    res.status(400).json({ message: 'Invalid supplier data' });
  }
};

// Login user or supplier
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && user.password === password) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isSupplier: user.isSupplier,
      isVerified: user.isVerified,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
};

module.exports = { registerUser, registerSupplier, loginUser };
