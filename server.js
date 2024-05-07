const express = require('express');
const app = express();
const pug = require('pug');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views')); 

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

app.get("/repo/:name", async (req, res) => {
  var repoName = req.params.name;

  res.render('repo', { name: repoName });
});


app.listen(port, console.log(`Server started on ${port}`));