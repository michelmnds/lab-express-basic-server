const express = require("express");
const projects = require("./data/projects.json");
const articles = require("./data/articles.json");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/home.html");
});
app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/blog.html");
});
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/not-found.html");
});

app.get("/api/projects", (req, res) => {
  res.json(projects);
});
app.get("/api/articles", (req, res) => {
  res.json(articles);
});

app.listen(3000, () => console.log("My first app listening on port 3000!"));
