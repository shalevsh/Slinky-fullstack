import React from "react";
import LoginForm from "./../../Components/LoginForm/LoginForm";
import "./login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="form-container">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
