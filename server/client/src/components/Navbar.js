import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>
          My<span className="highlight_todo">Todo</span>List
        </h2>
      </div>
      <ul className="navbar-category">
        <li className="navbar-links">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-links">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
