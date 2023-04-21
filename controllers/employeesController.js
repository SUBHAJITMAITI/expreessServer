const config = require("../config/dbConfig");
const knex = require("knex")(config);

const insertEmployee = (req, res, next) => {
  const { name, email } = req.body;

  knex("employees")
    .insert({ name, email })
    .then(() => {
      next();
    })
    .catch((err) => {
      next(err);
    });
};

const getAllEmployees = async (req, res, next) => {
  const employees = await knex("employees");
  next();
};

const getSingleEmployee = async (req, res) => {
  const id = req.params.id;
  const singleEmployee = await knex("employees").where({ id });
  res.sendStatus(201).json(singleEmployee);
};

//

const deleteEmployee = async (req, res) => {
  const id = req.body.id;
  await knex("employees")
    .del({ id })
    .then(() => res.sendStatus(201).json("it worked!"));
};

const updateEmployee = async (req, res) => {
  const id = req.body.id;
  const newBody = req.body;
  await knex("employees")
    .where({ id })
    .update(newBody)
    .then(() => res.sendStatus(201));
};

module.exports = {
  insertEmployee,
  getAllEmployees,
  getSingleEmployee,
  deleteEmployee,
  updateEmployee,
};
