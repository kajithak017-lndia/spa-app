import React from "react";

function Home({ username }) {
  return (
    <div className="page">
      <h1>Welcome, {username}!</h1>
      <p>This SPA demonstrates routing, login, account creation, feedback, and a simple user-friendly interface.</p>
    </div>
  );
}

export default Home;
