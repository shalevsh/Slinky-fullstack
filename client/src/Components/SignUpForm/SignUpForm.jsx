import React from "react";
import userClient from "../../Services/userClient";

const SignUpForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      userName: e.target.username.value,
      password: e.target.password.value,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      company: e.target.company.value,
      isAdmin: true,
    };
    console.log(user);
    await userClient.register(user);
  };

  return (
    <div className="signup-form">
      <div className="signup-form-container">
        <div className="signup-form-header">
          <h1>Sign Up</h1>
        </div>
        <div className="signup-form-body">
          <form onSubmit={handleSubmit}>
            <div className="signup-form-input-container">
              <label htmlFor="email">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="signup-form-input-container">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" />
            </div>
            <div className="signup-form-input-container">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="signup-form-input-container">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" />
            </div>
            <div className="signup-form-input-container">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" />
            </div>
            <div className="signup-form-input-container">
              <label htmlFor="company">Company</label>
              <input type="text" id="company" />
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
