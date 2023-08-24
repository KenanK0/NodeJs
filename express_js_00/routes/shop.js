const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");

router.get("/", (req, res, next) => {
  console.log("this always run");
  res.sendFile(path.join(rootDir, "views", "shop.html"));
  //   next();
});

module.exports = router;
