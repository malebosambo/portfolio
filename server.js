var express = require('express');

var app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"));

app.get("/", async (req, res) => {
  res.json({ "message": "OK" });
});

app.get("/repos", async (req, res) => {
  res.json({ "message": "OK" });
});

app.get("/issues", async (req, res) => {
  res.json({ "message": "OK" });
});

app.get("/view-repo", async (req, res) => {
  res.json({ "message": "OK" });
});

app.get("api/repo/:id", async (req, res) => {
  res.render("./views/repo/page");
});


app.listen(port, console.log(`Server started on ${port}`));