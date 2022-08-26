import React from "react";

const todo = ({ todos }) => {
  return (
    <div className="todos">
      {todos.map((todo, index) => {
        return <h1>{todo}</h1>;
      })}
    </div>
  );
};

export default todo;
