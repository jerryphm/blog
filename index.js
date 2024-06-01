const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("req", req);
  console.log("res", res);
  res.send("hello world!");
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
