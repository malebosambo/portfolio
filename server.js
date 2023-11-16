var express = require('express');
var cors = require('cors');
const moduletofetch = require('./lib/github');
const getDatabase = moduletofetch.getDatabase;

var app = express();
app.use(cors());

var HTTP_PORT = 8000;
app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT)
)};

app.get("/", async (req, res) => {
  res.json({ "message": "OK" });
});

app.get("/github-stats", async (req, res) => {
  const repos = await getDatabase();
  res.json(repos);
});

app.use(function (req, res) {
  res.status(404);
});
