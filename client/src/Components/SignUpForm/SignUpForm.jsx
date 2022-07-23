import React from "react";

const SignUpForm = () => {

  return (
    <div className="signup-form">
      <div className="signup-form-container">
        <div className="signup-form-header">
          <h1>Sign Up</h1>
        </div>
        <div className="signup-form-body">
          <form>
            <div className="signup-form-input-container">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" />
            </div>
            <div className="signup-form-input-container">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="signup-form-input-container">
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


export default SignUpForm;
