import React, { useState, useEffect } from "react";
import axios from "axios";
import Todo from "./todo";

const TodoForm = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/todo");
    } catch (error) {}
  };

  const getTodos = async () => {
    try {
      const { data } = await axios.get("/api/todos");
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="todoContainer">
      <form className="todoForm" onSubmit={addTodoHandler}>
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
