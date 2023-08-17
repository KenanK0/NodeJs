const http = require("http");
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("another middleware");

  res.send("<h1 style='background-color:lightblue' >We Love Kenan </h1>");
});

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);
