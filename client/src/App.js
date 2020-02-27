import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Signup from "./components/Signup"
import Login from "./components/Login"


//import { Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Signup />
      <Login />
    </div>
  );
}

export default App;
