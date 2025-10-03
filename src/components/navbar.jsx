import React from "react";
import { Link } from "react-router-dom";

function Navbar({ username, onLogout, onExit }) {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact</Link>

      <div style={{ marginLeft: "auto", display: "flex", gap: "10px", alignItems: "center" }}>
        {username && <span>Hi, {username}</span>}
        {username && (
          <>
            <button onClick={onLogout} style={{ cursor: "pointer" }}>Logout</button>
            <button onClick={onExit} style={{ cursor: "pointer" }}>Exit</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
