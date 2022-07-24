import React from "react";
import "./loginForm.css";

const LoginForm = () => {
  return (
    <div className="center">
      <h1>Login</h1>
      <form>
        <div className="txt_field">
          <input type="text" required />
          <span></span>
          <label>Username</label>
        </div>
        <div className="txt_field">
          <input type="password" required />
          <span></span>
          <label>Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginForm;
