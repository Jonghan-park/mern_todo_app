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
  const { todoFront } = req.body;
  try {
    const todo = new Todo({
      todo: todoFront,
    });

    todo.save();

    res.json(todo);
  } catch (error) {
    console.log(error);
  }
};
