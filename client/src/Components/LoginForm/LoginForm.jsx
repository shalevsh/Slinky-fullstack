import React, { useState } from "react";
import "./loginForm.css";
import userClient from "../../Services/userClient";

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
        <input type="submit" value="Login" onClick={handleSubmit} />
      </form>
      <div>
        <h1>{username}</h1>
      </div>
    </div>
  );
};

export default LoginForm;
