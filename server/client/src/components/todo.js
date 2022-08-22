import React from "react";

const todo = ({ todos }) => {
  return (
    <div className="todos">
      {todos.map((todo) => {
        <h1>{todo.todo}</h1>;
      })}
    </div>
  );
};

export default todo;
