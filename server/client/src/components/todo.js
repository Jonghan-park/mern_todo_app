import axios from "axios";
import React from "react";

const todo = ({ todos }) => {
  const deleteTodo = async (id) => {
    await axios.post("api/todo/del", { id });
  };
  return (
    <div className="todos">
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <h1>{todo.todo}</h1>
            <button onClick={() => deleteTodo(todo._id)}>del</button>
          </div>
        );
      })}
    </div>
  );
};

export default todo;
