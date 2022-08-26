const router = require("express").Router();
const {
  getAllTodos,
  addTodo,
  deleteTodo,
} = require("../controller/todoController");

router.get("/todos", getAllTodos);
router.post("/todo/new", addTodo);
router.post("/todo/del", deleteTodo);

module.exports = router;
