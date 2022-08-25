const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const cors = require("cors");
const dbConnect = require("./db/db");
const Todo = require("./model/todo");
const todoRoute = require("./");

// Connect DB from ./db/db
dbConnect();

app.use(cors());

app.use("/api", todoRoute);
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
