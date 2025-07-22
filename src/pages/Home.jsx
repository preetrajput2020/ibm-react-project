import React from "react";
import ProductList from "../components/Productlist/Productlist";
import Contact from "../pages/Contact";
import About from "../pages/About"; // ✅ Import About
import "./home.css";

const Home = () => {
  return (
    <div className="home-section" id = "home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to GrameenKala</h1>
          <p className="hero-description">
            Discover handmade treasures crafted by rural artisans across India.
          </p>
          <a href="#products" className="hero-btn">Explore Products</a>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <About />
      </section>

      {/* Product List */}
      <section className="product-section" id="products">
        <ProductList />
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
