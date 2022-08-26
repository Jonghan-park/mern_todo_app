import axios from "axios";
import React from "react";

const todo = ({ todos }) => {
  const deleteHandler = async (id) => {
    await axios.post("api/todo/delete", { id });
  };
  const completeHandler = async (id) => {
    await axios.post("api/todo/complete");
  };
  return (
    <div className="todos">
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <h1 onClick={() => completeHandler(todo._id)}>{todo.todo}</h1>
            <button onClick={() => deleteHandler(todo._id)}>del</button>
          </div>
        );
      })}
    </div>
  );
};

export default todo;
