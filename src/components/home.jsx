import React, { useState } from "react";

function Home({ setUsername }) {
  const [input, setInput] = useState("");
  const [isNewUser, setIsNewUser] = useState(false);

  const handleLogin = () => {
    if (input.trim() !== "") {
      localStorage.setItem("username", input);
      setUsername(input);
    }
  };

  return (
    <div className="page">
      <h1>Welcome to the SPA App</h1>
      <p>
        {isNewUser
          ? "Create a new account to get started."
          : "Sign in to continue exploring the app."}
      </p>

      <input
        type="text"
        placeholder="Enter your username"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleLogin}>
        {isNewUser ? "Sign Up" : "Sign In"}
      </button>

      <p style={{ marginTop: "10px" }}>
        {isNewUser ? "Already have an account?" : "New here?"}{" "}
        <button onClick={() => setIsNewUser(!isNewUser)}>
          {isNewUser ? "Sign In" : "Create Account"}
        </button>
      </p>
    </div>
  );
}

export default Home;
