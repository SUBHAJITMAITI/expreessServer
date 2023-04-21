const errorHandler = (err, req, res, next) => {
  if (err) res.status(500).send("an error has occured");
  res.status(201);
};

module.exports = errorHandler;
