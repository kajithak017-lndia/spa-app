import React from "react";
import { Link } from "react-router-dom";

function Navbar({ username }) {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>

      {username && (
        <>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </>
      )}

      <span className="nav-username">
        {username ? `Hi, ${username}` : ""}
      </span>
    </nav>
  );
}

export default Navbar;
