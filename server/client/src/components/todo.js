import React from "react";

const todo = () => {
  return (
    <div className="todoContainer">
      <form className="todoForm">
        <h1 className="todoTitle">My Todo List</h1>
        <label className="todoLabel" htmlFor="todo">
          To do
        </label>
        <div className="inputAndBtn">
          <input className="todoInput" type="text" name="todo" />
          <button className="inputBtn">Enter</button>
        </div>
      </form>
    </div>
  );
};

export default todo;
