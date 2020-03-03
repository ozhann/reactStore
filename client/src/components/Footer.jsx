import React from "react";

const Footer = props => {
  return (
    <footer className="footerback">
      {/* <p className="footer-links">
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
      </p>*/}
      <div className="columns-footer">
        <h2 className="woofer">Woofi</h2>
        <div className="four-columns">
          <div className="first-column">
            <h2>Subscriptions</h2>
            <h2>About Us</h2>
          </div>
          <div className="second-column">
            <h2>Press</h2>
            <h2>Need help?</h2>
          </div>

          <div className="third-column">
            <h2>Follow Us</h2>
          </div>
          <div className="fourth-column">
            <h2>Contact Us</h2>
          </div>
        </div>
        <p className="copyr">
          &copy; 2020 <strong>Woofi</strong> - Dog Store
        </p>
      </div>
    </footer>
  );
};

export default Footer;
