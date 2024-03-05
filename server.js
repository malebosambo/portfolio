var express = require('express');

var app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", async (req, res) => {
  res.json({ "message": "OK" });
});

app.get("/repos", async (req, res) => {
  res.json({ "message": "OK" });
});

app.get("/repos/:name", async (req, res) => {
  var name = req.params.name;
  console.log(name);
});


app.listen(port, console.log(`Server started on ${port}`));