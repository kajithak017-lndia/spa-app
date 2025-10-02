import React from "react";
import { Link } from "react-router-dom";

function Navbar({ username }) {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      {username && (
        <>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </>
      )}
      <span className="nav-username">{username && `Hi, ${username}`}</span>
    </nav>
  );
}

export default Navbar;
