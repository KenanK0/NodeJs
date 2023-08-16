const http = require("http");
const fs = require("fs");
console.log("bref");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  res.setHeader("Content-Type", "text/html");

  if (url === "/") {
    res.write("<title>Enter your name </title>");

    res.write(
      "<form action='/message' method='POST' > <input name='message' placeholder='Please enter your name' ></input> <button>save</button></form>"
    );

    res.write("<br/>");
    res.write("");
    return res.end();
  }
  if (method === "POST" && url === "/message") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, () => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
      });

      return res.end();
    });
  }

  res.end();
});

server.listen(3000);
