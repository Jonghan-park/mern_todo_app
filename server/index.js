const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const dbConnect = require("./db/db");

// Connect DB from ./db/db
dbConnect();

app.get("/todos", (req, res) => {
  res.send;
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
