const express = require("express");
const app = express();
const errorHandler = require("./middlewares/errorHandler");
app.use(express.json()); // add this middleware to parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // add this middleware to parse URL-encoded request bodies

const port = 3000;

app.use(errorHandler);

app.use("/employees", require("./Routes/API/employees"));

app.listen(port, () => {
  console.log("it worked on port 3000");
});
