const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.writeHead(200, { "content-type": "text/html" });
      break;
    case "/about":
      path += "about.html";
      res.writeHead(200, { "content-type": "text/html" });
      break;
    case "/contact-me":
      path += "contact-me.html";
      res.writeHead(200, { "content-type": "text/html" });
      break;
    default:
      res.writeHead(404, { "content-type": "text/html" });
      path += "404.html";
  }
  fs.readFile(path, "utf-8", (err, content) => {
    if (err) {
      res.writeHead(500, { "content-type": "text/plain" });
      console.log(err);
      res.end();
    } else {
      res.end(content);
    }
  });
});

server.listen(8080);
