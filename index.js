const http = require("node:http");
const fs = require("node:fs");
const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "views") });
});

app.get("/:route", (req, res) => {
  const route = req.params.route;

  console.log(route);
  switch (route) {
    case "about":
      console.log("lol");
      res.sendFile("about.html", { root: path.join(__dirname, "views") });
      break;
    case "contact-me":
      res.sendFile("contact-me.html", { root: path.join(__dirname, "views") });
      break;
    default:
      res.sendFile("404.html", { root: path.join(__dirname, "views") });
  }
});

// server.listen(8080);
app.listen(8000, (error) => {
  if (error) {
    throw error;
  }
  console.log(`simpe info site -- listening on port 8000`);
});
