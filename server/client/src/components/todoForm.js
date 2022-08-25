import React, { useState, useEffect } from "react";
import axios from "axios";
import Todo from "./todo";

const TodoForm = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState(null);
  const [error, setError] = useState("");

  const addTodoHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/todo", { todo });
    } catch (error) {
      setError(error);
      console.log(error);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  const getTodos = async () => {
    try {
      const { data } = await axios.get("/api/todos");
      console.log(data);
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
          <input
            className="todoInput"
            type="text"
            name="todo"
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="inputBtn">Enter</button>
        </div>
        {error && <h2 className="errorMessage">{error}</h2>}
      </form>
      <div className="todos">
        <Todo todos={todos} />
      </div>
    </div>
  );
};

export default TodoForm;
