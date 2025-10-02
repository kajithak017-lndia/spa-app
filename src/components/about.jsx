import React from "react";

function About({ username }) {
  if (!username) {
    return (
      <section className="about-section">
        <h1>Access Denied</h1>
        <p>Please sign in from Home page to view About information.</p>
      </section>
    );
  }

  return (
    <section className="about-section">
      <h1>About the App & Owner</h1>
      <p>
        This SPA demonstrates modern web development with React and React Router.  
        Smooth page navigation without reloads is implemented.
      </p>

      <h2>About the Owner</h2>
      <p>
        The creator is a passionate web developer learning SPA architecture.  
        This project demonstrates components, deployment, and user access control.
      </p>

      <h2>App Details</h2>
      <ul>
        <li><strong>Creation Date:</strong> October 2025</li>
        <li><strong>Tech Stack:</strong> React 18, React Router 6, CSS, GitHub Pages</li>
        <li><strong>Purpose:</strong> Showcase SPA with username-based access</li>
        <li><strong>Features:</strong> Home, About, Contact with username login</li>
      </ul>
    </section>
  );
}

export default About;
