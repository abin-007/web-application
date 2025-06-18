import React from 'react';
import ShopPage from './ShopPage';
import OfferCarousel from '../components/OfferCarousel';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero-section vh-100 d-flex align-items-center justify-content-center text-white text-center"
        style={{
          backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1664201890484-a5f7109c8e56?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
        }}
      >
        <div
          className="container text-center p-5"
          style={{
            background: 'rgba(0, 0, 0, 0.6)',
            borderRadius: '15px',
          }}
        >
          <h1 className="display-4 fw-bold">Welcome to MiniMall</h1>
          <p className="lead mt-3">
            Discover top-notch products tailored for your needs.
          </p>
          <a href="#products" className="btn btn-light btn-lg mt-4 px-5">
            Start Shopping
          </a>
        </div>
      </div>



      {/* Products Section */}
      <div className="products-section py-5 bg-light" id="products">
        <div className="container">
          <h2 className="text-center text-success mb-4">Our Featured Products</h2>
          <p className="text-center text-muted mb-5">
            Explore our curated collection of products just for you.
          </p>
          <ShopPage />
        </div>
      </div>
      {/* Offer Carousel Section */}
      <OfferCarousel />
    </div>
  );
};

export default Home;
