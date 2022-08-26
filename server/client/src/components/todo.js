import axios from "axios";
import React from "react";
import { BsTrash } from "react-icons/bs";
const todo = ({ todos }) => {
  const deleteHandler = async (id) => {
    await axios.post("api/todo/delete", { id });
  };
  const completeHandler = async (id) => {
    await axios.post("api/todo/complete", { id });
  };
  return (
    <div className="todos">
      {todos.map((todo, index) => {
        return (
          <div className="todo-container" key={index}>
            <h1
              className={"eachTodo" + (todo.complete ? "-complete" : "")}
              onClick={() => completeHandler(todo._id)}
            >
              {todo.todo}
            </h1>
            <BsTrash
              className="trash-icon"
              onClick={() => deleteHandler(todo._id)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default todo;
