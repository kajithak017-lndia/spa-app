import React from "react";
import { Link } from "react-router-dom";

function Navbar({ username }) {
  return (
    <nav className="navbar">
      <div>
        <Link to="/">Home</Link>
        {username && <Link to="/about">About</Link>}
        {username && <Link to="/contact">Contact</Link>}
      </div>
      <div>{username && <span>Logged in as: {username}</span>}</div>
    </nav>
  );
}

export default Navbar;
