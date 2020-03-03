import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = props => {
  const logout = () => {
    axios.delete("/api/auth/logout").then(() => {
      props.setUser(null);
    });
  };

  if (props.user) {
    return (
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link onClick={logout} to="/">
          Logout
        </Link>
      </nav>
    );
  }

  return (
    <nav className="navbar">
      <Link to="/products">SHOP</Link>
      <Link to="/about">ABOUT US</Link>
      <Link to="/" className="logo">
        Woofi
      </Link>
      <Link to="/shoppingcart">CART</Link>
      <Link to="/signup">LOGIN</Link>
    </nav>
  );
};

export default Navbar;
