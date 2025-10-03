import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./styles.css";

function App() {
  const [username, setUsername] = useState(localStorage.getItem("username") || "");

  useEffect(() => {
    const stored = localStorage.getItem("username");
    if (stored) setUsername(stored);
  }, []);

  return (
    <BrowserRouter basename="/spa-app"> {/* basename ensures correct routing on GitHub Pages */}
      <Navbar username={username} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home setUsername={setUsername} />} />
          <Route
            path="/about"
            element={username ? <About username={username} /> : <Navigate to="/" />}
          />
          <Route
            path="/contact"
            element={username ? <Contact username={username} /> : <Navigate to="/" />}
          />
          {/* Redirect unknown paths to Home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
