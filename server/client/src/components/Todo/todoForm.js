import React, { useState, useEffect } from "react";
import axios from "axios";
import Todo from "./todo";
import "./todoForm.css";

const TodoForm = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [error, setError] = useState("");

  const addTodoHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "https://todo-jonghan.onrender.com/api/todo/new",
        {
          todo,
        }
      );
      setTodos([...todos, result.data]);
      setTodo(" ");
    } catch (error) {
      setError(error);
      console.log(error);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };
  const deleteTodoHandler = async (id) => {
    const result = await axios.post(
      "https://todo-jonghan.onrender.com/api/todo/delete",
      {
        id,
      }
    );

    setTodos((todos) => todos.filter((todo) => todo._id !== result.data._id));
  };

  const completeTodoHandler = async (id) => {
    const result = await axios.post(
      "https://todo-jonghan.onrender.com/api/todo/complete",
      {
        id,
      }
    );
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo._id === result.data._id) {
          todo.complete = result.data.complete;
        }
        return todo;
      })
    );
  };

  const getTodos = async () => {
    try {
      const { data } = await axios.get(
        "https://todo-jonghan.onrender.com/api/todos"
      );
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
        {todos && (
          <Todo
            todos={todos}
            deleteFindById={deleteTodoHandler}
            completeFindById={completeTodoHandler}
          />
        )}
      </div>
    </div>
  );
};

export default TodoForm;
