import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import SignUpForm from "./Components/SignUpForm/SignUpForm";
import BookingForm from "./Components/BookingForm/BookingForm";
import Navbar from "./Components/Generics/NavBar/NavBar";
import NotFound from "./Pages/NotFound/NotFound";

import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/booking" element={<BookingForm />} />
          </Routes>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
