const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "Hi there!" });
});

app.listen(5000);
