require("dotenv").config();

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ mssg: "welcome to the app" });
});

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.listen(process.env.PORT, () => {
  console.log("listening on port 4000");
});
