var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());

var bodyParser = require("body-parser");
app.use(bodyParser.urlenconded({ extended: false }));
app.use(bodyParser.json());

var HTTP_PORT = 8000;
app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});

app.get("/", async (req, res) => {
  res.json({ "message": "OK" });
});

app.get("/repos", async (req, res) => {
  
});

app.get("/repos/:id", async (req, res) => {

});
