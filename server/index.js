const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const cors = require("cors");
const dbConnect = require("./db/db");
const Todo = require("./model/todo");
const todoRoute = require("./Routes/todo");
const path = require("path");

// Connect DB from ./db/db
dbConnect();

app.use(cors());
// express 4, has build-in body parser, I don't need to install body parser separately
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API running");
  });
}

app.use("/api", todoRoute);
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
