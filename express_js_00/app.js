const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const app = express();
const path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(shopRoutes);

app.use("/admin", adminRoutes);

app.use((req, res, next) => {
  res.status(404);

  res.sendFile(path.join(__dirname, "views", "404.html"));
  // res.status(404).send("<h1>404 bro</h1>");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
