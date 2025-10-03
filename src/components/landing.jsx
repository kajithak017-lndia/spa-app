import React, { useState } from "react";

function Landing({ setUser, setPage }) {
  const [isCreating, setIsCreating] = useState(false);
  const [username, setUsernameInput] = useState("");
  const [password, setPasswordInput] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [accounts, setAccounts] = useState(JSON.parse(localStorage.getItem("accounts") || "[]"));

  const handleSignIn = () => {
    const match = accounts.find(acc => acc.username === username && acc.password === password);
    if (match) {
      localStorage.setItem("username", username);
      localStorage.setItem("isLoggedIn", "true");
      setUser(username);
      setPage(true);
    } else {
      alert("Incorrect username or password");
    }
  };

  const handleCreate = () => {
    if (!username || !password) return alert("Enter username & password");
    if (password !== confirmPass) return alert("Passwords do not match");
    const newAcc = { username, password };
    const updatedAccounts = [...accounts, newAcc];
    setAccounts(updatedAccounts);
    localStorage.setItem("accounts", JSON.stringify(updatedAccounts));
    alert("Account created! Please sign in.");
    setIsCreating(false);
    setUsernameInput("");
    setPasswordInput("");
    setConfirmPass("");
  };

  return (
    <div className="page">
      <h1 style={{ textAlign: "center" }}>SINGLE PAGE APPLICATION</h1>
      <div style={{ maxWidth: "400px", margin: "auto" }}>
        {!isCreating ? (
          <>
            <h2 style={{ textAlign: "center" }}>Sign In</h2>
            <input
              style={{ width: "100%", fontSize: "18px", marginBottom: "10px" }}
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsernameInput(e.target.value)}
            />
            <input
              style={{ width: "100%", fontSize: "18px", marginBottom: "5px" }}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
            <div>
              <input
                type="checkbox"
                id="showPass"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              <label htmlFor="showPass"> Show Password</label>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
              <button onClick={handleSignIn} style={{ flex: 1, marginRight: "5px" }}>Sign In</button>
              <button onClick={() => setIsCreating(true)} style={{ flex: 1, marginLeft: "5px" }}>Create Account</button>
            </div>
          </>
        ) : (
          <>
            <h2 style={{ textAlign: "center" }}>Create Account</h2>
            <input
              style={{ width: "100%", fontSize: "18px", marginBottom: "10px" }}
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsernameInput(e.target.value)}
            />
            <input
              style={{ width: "100%", fontSize: "18px", marginBottom: "5px" }}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
            <input
              style={{ width: "100%", fontSize: "18px", marginBottom: "5px" }}
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />
            <div>
              <input
                type="checkbox"
                id="showPassCreate"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              <label htmlFor="showPassCreate"> Show Password</label>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
              <button onClick={handleCreate} style={{ flex: 1, marginRight: "5px" }}>Create</button>
              <button onClick={() => setIsCreating(false)} style={{ flex: 1, marginLeft: "5px" }}>Back</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Landing;
