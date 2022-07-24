import React, { useState } from "react";
import userClient from "../../Services/userClient";
import "./loginForm.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await userClient.login(
      e.target.username.value,
      e.target.password.value
    );
    if (res) {
      setUsername(res);
    }
  };

  return (
    <div className="login-form">
      <div className="login-form-container">
        <div className="login-form-header">
          <h1>Login</h1>
        </div>
        <div className="login-form-body">
          <form onSubmit={handleSubmit}>
            <div className="login-form-input-container">
              <label htmlFor="email">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="login-form-input-container">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="login-form-input-container">
              <button className="btn login-btn" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <h1>{username}</h1>
      </div>
    </div>
  );
};

export default LoginForm;
