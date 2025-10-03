import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Landing from "./components/landing";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";

function App() {
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    const storedLogin = localStorage.getItem("isLoggedIn") === "true";
    if (storedUser && storedLogin) {
      setUsername(storedUser);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    if (window.confirm("When you logout, your username and password will be forgotten. Continue?")) {
      localStorage.removeItem("username");
      localStorage.removeItem("isLoggedIn");
      setUsername("");
      setIsLoggedIn(false);
    }
  };

  const handleExit = () => {
    window.close(); // Will attempt to close the tab/window
  };

  return (
    <BrowserRouter>
      <Navbar username={username} onLogout={handleLogout} onExit={handleExit} />
      <div className="content">
        <Routes>
          {!isLoggedIn ? (
            <Route path="/*" element={<Landing setUser={setUsername} setPage={setIsLoggedIn} />} />
          ) : (
            <>
              <Route path="/" element={<Home username={username} />} />
              <Route path="/about" element={<About username={username} />} />
              <Route path="/contact" element={<Contact username={username} />} />
            </>
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
