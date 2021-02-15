const express = require("express");

const app = express();

app.listen(3000);

app.get("/", (req, res) => {
  res.sendFile("./htmlPages/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./htmlPages/about.html", { root: __dirname });
});

//redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

//404 Error
app.use((req, res) => {
  res.status(404).sendFile("./htmlPages/error.html", { root: __dirname });
});
