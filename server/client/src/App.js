import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Main from "./page/Main/Main";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <Login />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
