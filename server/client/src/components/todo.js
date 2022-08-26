import axios from "axios";
import React from "react";
import { BsTrash } from "react-icons/bs";
const todo = (props) => {
  const deleteHandler = async (id) => {
    props.getIdInTodo(id);
  };
  const completeHandler = async (id) => {
    await axios.post("api/todo/complete", { id });
  };
  return (
    <div className="todos">
      {props.todos.map((todo, index) => {
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
