const express = require("express");
const path = require("path");
var bodyParser = require("body-parser");
const app = express();
app.use(require("./utils/cors"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", require("./routes/routes"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(process.env.PORT || 5555, () => {
  console.log("Server Started at port 5555 ");
});
