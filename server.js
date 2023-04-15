const express = require("express");
const app = express();
const port = 3000;

app.use("/employees", require("./Routes/API/employees"));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log("it worked on port 3000");
});
