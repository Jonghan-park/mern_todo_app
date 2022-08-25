const Todo = require("../model/todo");

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.json(todos);
  } catch (error) {
    console.log(error);
  }
};

module.exports.getAllTodos = getAllTodos;
