import React from "react";

const LoginForm = () => {
  return (
    <div className="login-form">
      <div className="login-form-container">
        <div className="login-form-header">
          <h1>Login</h1>
        </div>
        <div className="login-form-body">
          <form>
            <div className="login-form-input-container">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" />
            </div>
            <div className="login-form-input-container">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="login-form-input-container">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
