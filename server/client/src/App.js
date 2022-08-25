import React from "react";
import "./App.css";
import TodoForm from "./components/todoForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoForm />} />
      </Routes>
    </Router>
  );
}

export default App;
