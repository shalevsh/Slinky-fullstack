import React from "react";
import "./signUpForm.css";

const signUpForm = () => {
  return (
    <div className="center">
      <h1>SignUp</h1>
      <form>
        <div className="txt_field">
          <input type="text" required />
          <span></span>
          <label>First name</label>
        </div>
        <div className="txt_field">
          <input type="text" required />
          <span></span>
          <label>Last name</label>
        </div>
        <div className="txt_field">
          <input type="text" required />
          <span></span>
          <label>Username</label>
        </div>
        <div className="txt_field">
          <input type="text" required />
          <span></span>
          <label>Email</label>
        </div>
        <div className="txt_field">
          <input type="password" required />
          <span></span>
          <label>Password</label>
        </div>
        <div className="txt_field">
          <input type="text" required />
          <span></span>
          <label>Company</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default signUpForm;
