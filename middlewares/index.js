const validationTask = (req, res, next) => {
  if (req.body.title && req.body.title.trim() === "") res.sendStatus(404);
  if (
    req.body.completed !== undefined &&
    typeof req.body.completed !== "boolean"
  )
    res.sendStatus(404);
  next();
};

const logging = (req, res, next) => {
  console.log(req.method, req.originalUrl);
  next();
};

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong");
};

module.exports = { validationTask, logging, errorHandler };
