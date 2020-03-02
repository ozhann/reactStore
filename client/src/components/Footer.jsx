import React, { Component } from "react";

const Footer = props => {
  return (
    <footer>
      <p className="footer-links">
        <a href="#" target="_blank">
          Follow Us on Social Media
        </a>
        <span> / </span>
        <a href="#" target="_blank">
          Need any help?
        </a>
        <span> / </span>
        <a href="#" target="_blank">
          Contact Us
        </a>
        <span> / </span>
        <a href="#" target="_blank">
          Read Our Blog
        </a>
      </p>
      <p>
        &copy; 2020 <strong>Woofi</strong> - Dog Store
      </p>
    </footer>
  );
};

export default Footer;
