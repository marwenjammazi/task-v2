const fs = require("fs");
const express = require("express");
const router = express.Router();
const path = require("path");

const filePath = path.join(__dirname, "../tasks.json");

const validationTitle = (req, res, next) => {
  if (req.body.title && req.body.title.trim() === "") res.sendStatus(404);
  if (
    req.body.completed !== undefined &&
    typeof req.body.completed !== "boolean"
  )
    res.sendStatus(404);
  next();
};

const readTasks = () => {
  const data = fs.readFileSync(filePath, "utf8");
  if (data) return JSON.parse(data);
  else return [];
};
// read all tasks
router.get("/", (req, res) => {
  const tasks = readTasks();
  if (tasks.length) res.json(tasks);
  else res.sendStatus("404");
});

// post adding task
router.post("/", validationTitle, (req, res) => {
  const title = req.body.title;
  console.log(title);
  const tasks = readTasks();
  const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
  const task = { id, title, completed: false };
  tasks.push(task);
  fs.writeFileSync(filePath, JSON.stringify(tasks));
  res.sendStatus(200);
});
//add get fetch task by id
router.get("/:id", (req, res) => {
  const tasks = readTasks();
  const id = Number(req.params.id);
  const task = tasks.find((task) => {
    return task.id === id;
  });
  if (task) res.status(200).json(task);
  else res.sendStatus(404);
});

//updating
router.put("/:id", validationTitle, (req, res) => {
  const id = Number(req.params.id);
  const { title, completed } = req.body;
  const tasks = readTasks();
  const taskIndex = readTasks().findIndex((task) => {
    return task.id === id;
  });
  if (taskIndex == -1) res.sendStatus(404);
  if (title) tasks[taskIndex].title = title;
  if (completed) tasks[taskIndex].completed = completed;
  fs.writeFileSync(filePath, JSON.stringify(tasks));
  res.sendStatus(200);
});
router.delete("/:id", (req, res) => {
  const tasks = readTasks();
  const id = Number(req.params.id);
  const filteredTask = tasks.filter((task) => task.id != id);
  fs.writeFileSync(filePath, JSON.stringify(filteredTask));
  res.sendStatus(200);
});
module.exports = router;
