const express = require("express");
const taskRoutes = require("./Routes/tasks");
const app = express();

app.use(express.json());

// handle errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong");
});

app.use((req, res, next) => {
  console.log(req.method, req.originalUrl);
  next();
});

//mount task routes
app.use("/tasks", taskRoutes);
//start server
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
