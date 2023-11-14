var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var HTTP_PORT = 8000;
app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT)
)};

app.get("/", (req, res, next) => {
  res.json({ "message": "OK" });
});

app.get("/github-stats", (req, res, next) => {
  res.json({ "message": "OK" });
});

app.use(function (req, res) {
  res.status(404);
});
