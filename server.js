const express = require("express");
const taskRoutes = require("./Routes/tasks").router;
const readTasks = require("./Routes/tasks").readTasks;
const { logging, errorHandler } = require("./middlewares");
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);
app.use(logging);

// view engine
app.set("view engine", "ejs");

// api task routes
app.use("/tasks", taskRoutes);

// render index
app.get("/", (req, res) => {
  const tasks = readTasks();
  res.render("index", { tasks });
});
app.get("/addtask", (req, res) => {
  res.render("addtask");
});

//start server
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
