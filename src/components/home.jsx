import React, { useState } from "react";

function Home({ setUsername }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [inputName, setInputName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputName) return;
    setUsername(inputName);
    localStorage.setItem("username", inputName);
  };

  return (
    <section className="home-section">
      <h1>Welcome to My User Access SPA 🚀</h1>

      {!localStorage.getItem("username") && (
        <form className="user-form" onSubmit={handleSubmit}>
          <p>{isSignUp ? "Create an account" : "Sign In"}</p>
          <input
            type="text"
            placeholder="Enter your username"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            required
          />
          <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>
          <p
            style={{ cursor: "pointer", color: "blue" }}
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </p>
        </form>
      )}

      {localStorage.getItem("username") && (
        <div className="home-features">
          <h2>Hello, {localStorage.getItem("username")}!</h2>
          <p>You now have access to About and Contact pages.</p>
        </div>
      )}
    </section>
  );
}

export default Home;
