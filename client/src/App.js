import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SignUpForm from "./Components/SignUpForm/SignUpForm";
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
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
