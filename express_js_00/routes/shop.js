const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");

const adminData = require("./admin");

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", { prods: products, docTitle: "My Shop" });
  // console.log('shop.js', products);
  // console.log("this always run");
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  //   next();
});

module.exports = router;
