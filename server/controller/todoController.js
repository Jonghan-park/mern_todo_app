const Todo = require("../model/todo");

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.log(error);
  }
};
exports.addTodo = async (req, res) => {
  try {
    const todo = new Todo({
      todo: req.body.todo,
    });
    todo.save();
    res.json(todo);
  } catch (error) {
    console.log(error);
  }
};
