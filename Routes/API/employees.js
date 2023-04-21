const express = require("express");

const route = express.Router();

const employeesController = require("../../controllers/employeesController");

route
  .route("/")
  .get(employeesController.getAllEmployees)
  .post(employeesController.insertEmployee)
  .put(employeesController.updateEmployee)
  .delete(employeesController.deleteEmployee);

route
  .route("/:id")
  .get(employeesController.getSingleEmployee)
  .post((req, res) => res.send("This is a POST request"))
  .put((req, res) => res.send("this is a PUT request"))
  .delete((req, res) => res.send("this is a delete request"));

module.exports = route;
