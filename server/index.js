const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const cors = require("cors");
const dbConnect = require("./db/db");
const Todo = require("./model/todo");
const todoRoute = require("./Routes/todo");

// Connect DB from ./db/db
dbConnect();

app.use(cors());
// express 4, has build-in body parser, I don't need to install body parser separately
app.use(express.json());

app.use("/api", todoRoute);
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
