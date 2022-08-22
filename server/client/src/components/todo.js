import React from "react";

const todo = () => {
  return (
    <div className="todoContainer">
      <form className="todoForm">
        <label className="todoLabel" htmlFor="todo">
          To do
        </label>
        <input className="todoInput" type="text" name="todo" />
      </form>
    </div>
  );
};

export default todo;
