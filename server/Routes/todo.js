const router = require("express").Router();
const { getAllTodos, addTodo } = require("../controller/todoController");

router.get("/todos", getAllTodos);
router.post("/todo/new", addTodo);

module.exports = router;
