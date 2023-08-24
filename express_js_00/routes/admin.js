const express = require("express");
const router = express.Router();
const path = require("path");

const rootDir = require("../util/path");

router.get("/add-product", (req, res, next) => {
  console.log(" middleware");
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
  // res.send(
  //   "<form action='/admin/add-product' method='POST' ><input name='title' ><button>Add Products</button></form>"
  // );
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
