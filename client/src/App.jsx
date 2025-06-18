// src/App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import LoginPage from './pages/LoginPage';
import RegisterUserPage from './pages/RegisterUserPage';
import RegisterSupplierPage from './pages/RegisterSupplierPage';
import SupplierPage from './pages/SupplierPage';
import AdminPanel from './pages/AdminPanel/AdminDashboard';
import AdminDashboard from './pages/AdminPanel/AdminDashboard';
import ManageProducts from './pages/AdminPanel/ManageProducts';
import ManageUsers from './pages/AdminPanel/ManageUsers';
import ManageSuppliers from './pages/AdminPanel/ManageSuppliers';
import ManageOrders from './pages/AdminPanel/ManageOrders';
import FeedbackReports from './pages/AdminPanel/FeedbackReports';
import ManageProductsSupplier from './pages/SupplierDashboard/ManageProducts';
import SupplierDashboard from './pages/SupplierDashboard/SupplierDashboard';
import AddProduct from './pages/SupplierDashboard/AddProduct';
import ItemDetailsPage from './pages/ItemDetailsPage';
import Booking from './pages/Booking';
import BookingsPageSupplier from './pages/SupplierDashboard/BookingsPageSupplier';
import CartPage from './pages/Cart';
import BookingPage from './pages/BookingCustomer';
import ManageStock from './pages/SupplierDashboard/ManageStock';

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/auth/me');
        setUser(response.data);
      } catch (err) {
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    if (user) {
      if (user.isAdmin) {
        navigate('/admin');
      } else if (user.isSupplier) {
        if (!user.isVerified) {
          alert('Your supplier account is not verified.');
        } else {
          navigate('/supplier');
        }
      } else {
        navigate('/');
      }
    }
  }, [user, navigate]);

  return (
      <div className="App">
        <Navbar />
        <main className="container my-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/bookings" element={<BookingPage />} />


            <Route path="/item/:itemId" element={<ItemDetailsPage />} />
            <Route path="/payment/:itemid/:price" element={<Booking />} />


            <Route path="/login" element={<LoginPage />} />
            <Route path="/register-user" element={<RegisterUserPage />} />
            <Route path="/register-supplier" element={<RegisterSupplierPage />} />
            
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/products" element={<ManageProducts />} />
            <Route path="/admin/users" element={<ManageUsers />} />
            <Route path="/admin/suppliers" element={<ManageSuppliers />} />
            <Route path="/admin/orders" element={<ManageOrders />} />
            <Route path="/admin/feedback" element={<FeedbackReports />} />

            <Route path="/supplier" element={<SupplierDashboard />} />
            <Route path="/supplier/products" element={<ManageProductsSupplier />} />
            <Route path="/supplier/add-product" element={<AddProduct />} />
            <Route path="/supplier/bookings" element={<BookingsPageSupplier />} />
            <Route path="/supplier/stock" element={<ManageStock />} />


          </Routes>
        </main>
        <Footer />
      </div>
  );
}

export default App;
