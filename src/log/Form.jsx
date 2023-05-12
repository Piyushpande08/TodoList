import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/FormStyle.css";

function LoginScreen() {
  const router = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [showPassword, setShowPassword] = useState("false");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValidEmail(email)) {
      setErrorMessage("Invalid email format");
    } else if (!isValidPassword(password)) {
      setErrorMessage("Invalid password format");
    } else if (email === "valid@email.com" && password === "ValidPassword1") {
      setLoggedIn(true);
    } else {
      setErrorMessage("Invalid email or password");
    }
  };

  function isValidEmail(email) {
    // perform email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isValidPassword(password) {
    // perform password validation using regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    return passwordRegex.test(password);
  }

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  if (loggedIn) {
    return router("/task");
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="email">
          <label>Email:</label>
          <input
            type="email"
            id="email"
            name="username"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="password">
          <label>Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="button" onClick={togglePasswordVisibility}>
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <button type="submit">Login</button>
        {errorMessage && <div>{errorMessage}</div>}
      </form>
    </div>
  );
}

export default LoginScreen;
