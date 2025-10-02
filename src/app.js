import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";

function App() {
  const [username, setUsername] = useState(localStorage.getItem("username") || "");

  useEffect(() => {
    const stored = localStorage.getItem("username");
    if (stored) setUsername(stored);
  }, []);

  return (
    <BrowserRouter>
      <Navbar username={username} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home setUsername={setUsername} />} />
          {username && (
            <>
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
