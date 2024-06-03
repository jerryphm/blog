const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");
const route = require("./routes");

const app = express();
const port = 3000;

// handlebars
app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");
app.set("views", "src/resources/views");

// morgan
app.use(morgan("combined"));

// request middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

route(app)

app.listen(port, () => {
  console.log(`listening on port ${port}\n`);
});
