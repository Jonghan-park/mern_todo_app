const Todo = require("../model/todo");

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.json(todos);
  } catch (error) {
    console.log(error);
  }
};
exports.addTodo = async (req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.log(error);
  }
};
