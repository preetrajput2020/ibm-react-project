import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <a href="#home" className="logo">Grameenkala</a>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
