const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path")

const app = express();
const port = 3000;

// handlebars
app.engine(".hbs", engine({
  extname: '.hbs'
}));
app.set("view engine", ".hbs");
app.set("views", "src/resources/views");

// morgan
// app.use(morgan("combined"));

// main
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.get("/search", (req, res) => {
  console.log(req.query)
  res.render("search");
});

app.listen(port, () => {
  console.log(`listening on port ${port}\n`);
});
