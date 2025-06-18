// src/pages/AdminPanel/AdminDashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div className="dashboard-links">
        <Link to="/admin/products" className="btn btn-primary mx-2 my-2">Manage Products</Link>
        <Link to="/admin/suppliers" className="btn btn-primary mx-2 my-2">Manage Suppliers</Link>
        {/* <Link to="/admin/orders" className="btn btn-primary mx-2 my-2">Manage Orders</Link> */}
        {/* <Link to="/admin/stock" className="btn btn-primary mx-2 my-2">Manage Stock</Link> */}
        {/* <Link to="/admin/feedback" className="btn btn-primary mx-2 my-2">Feedback & Reports</Link> */}
      </div>
    </div>
  );
};

export default AdminDashboard;
