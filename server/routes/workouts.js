const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ mssg: "Get all workouts" });
});

router.get("/:id", (req, res) => {
  res.json({ mssg: "Get single workout" });
});

router.post("/:id", (req, res) => {
  res.json({ mssg: "add single workout" });
});

router.delete("/:id", (req, res) => {
  res.json({ mssg: "delete workout" });
});

router.patch("/:id", (req, res) => {
  res.json({ mssg: "update workout" });
});

module.exports = router;
