const express = require("express");
const router = express.Router();

const {} = require("../controller/users-controller");

router.get("/", (req, res, next) => {
  res.json({ User: "This is an user" });
});

module.exports = router;
