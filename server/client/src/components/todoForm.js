import React, { useState, useEffect } from "react";
import Todo from "./todo";

const TodoForm = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const data = await fetch("http://localhost:5000/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.log("Error: ", err));
  };
  useEffect(() => {
    getTodos();
  }, []);

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
      <div className="todos">
        <Todo todos={todos} />
      </div>
    </div>
  );
};

export default TodoForm;
