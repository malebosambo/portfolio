var express = require('express');

var app = express();
const port = 4000;

app.get("/", async (req, res) => {
  res.json({ "message": "OK" });
});

app.get("/repos", async (req, res) => {
  res.json({ "message": "OK" });
});

app.get("/repos/:id", async (req, res, next) => {
  var id = req.params.id;
});


app.listen(port, console.log(`Server started on ${port}`));