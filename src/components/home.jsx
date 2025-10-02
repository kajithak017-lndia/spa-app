import React, { useState } from "react";

function Home({ setUsername }) {
  const [input, setInput] = useState("");

  const handleLogin = () => {
    if (input.trim() !== "") {
      localStorage.setItem("username", input);
      setUsername(input);
    }
  };

  return (
    <div className="page">
      <h1>Welcome to the SPA App</h1>
      <p>Please sign in to explore more pages.</p>

      <input
        type="text"
        placeholder="Enter your username"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleLogin}>Sign In</button>
    </div>
  );
}

export default Home;
