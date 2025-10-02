import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import "./styles.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
