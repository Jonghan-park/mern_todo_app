const router = require("express").Router();
const {
  getAllTodos,
  addTodo,
  deleteTodo,
  completeTodo,
} = require("../controller/todoController");

router.get("/todos", getAllTodos);
router.post("/todo/new", addTodo);
router.post("/todo/delete", deleteTodo);
router.post("/todo/complete", completeTodo);

module.exports = router;
