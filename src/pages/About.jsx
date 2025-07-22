import React from "react";
import "./About.css";

const About = () => {
  return (
    <main className="about-container">
      <h1 className="about-title">About GrameenKala</h1>
      <p className="about-description">
        GrameenKala is a heartfelt initiative dedicated to preserving the timeless artistry of India’s rural communities. We bring you authentic, handmade products crafted by local artisans, each telling a unique story of tradition, culture, and passion.
      </p>

      <p className="about-description">
        Our mission is rooted in fair trade practices, empowering artisans—especially women and marginalized communities—by providing them with a sustainable income and a global platform to showcase their talents.
      </p>

      <p className="about-description">
        Every item we offer is not just a product, but a piece of heritage. By supporting GrameenKala, you are helping to:
      </p>

      <ul className="about-list">
        <li>Promote rural employment and self-reliance</li>
        <li>Preserve traditional crafts and techniques</li>
        <li>Contribute to gender equality and women empowerment</li>
        <li>Support the United Nations Sustainable Development Goals (SDGs)</li>
      </ul>

      <p className="about-description">
        Join us in celebrating India's rich craft legacy and making a difference—one handmade product at a time.
      </p>
    </main>
  );
};

export default About;
