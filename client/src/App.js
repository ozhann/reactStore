import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";

//import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Signup />
      <Login />
      <Welcome />
      <Footer />
    </div>
  );
}

export default App;
