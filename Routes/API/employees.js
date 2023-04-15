const express = require("express");

const route = express.Router();

route
  .route("/")
  .get((req, res) => res.send("This is a GET request"))
  .post((req, res) => res.send("This is a POST request"))
  .put((req, res) => res.send("this is a PUT request"))
  .delete((req, res) => res.send("this is a delete request"));

route
  .route("/:id")
  .get((req, res) => res.send("This is a GET request" + req.params.id))
  .post((req, res) => res.send("This is a POST request"))
  .put((req, res) => res.send("this is a PUT request"))
  .delete((req, res) => res.send("this is a delete request"));

module.exports = route;
