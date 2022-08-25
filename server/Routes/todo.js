const router = require("express").Router();
const { getAllTodos } = require("../controller/todoController");

router.get("/todos", getAllTodos);
router.post("/todo");

module.exports = router;
