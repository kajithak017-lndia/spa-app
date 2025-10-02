import React from "react";

function About({ username }) {
  return (
    <div className="page">
      <h1>About Us</h1>
      <p>Hello <b>{username}</b>, welcome to our application.</p>
      <p>
        This app is a Single Page Application (SPA) built using React.  
        It demonstrates routing, login, feedback, and a smooth user experience.
      </p>
      <p>
        Creation Date: October 2025  
        Developed as a learning project for modern web app development.
      </p>
      <p>
        Our aim is to provide simple, user-friendly, and interactive pages 
        similar to real-world applications like e-commerce sites.
      </p>
    </div>
  );
}

export default About;
