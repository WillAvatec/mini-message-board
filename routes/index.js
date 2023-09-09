const express = require("express");
const router = express.Router();

// Sample messages
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", messages });
});

// Get on new
router.get("/new", function (req, res, next) {
  res.render("form", { title: "New" });
});

router.post("/new", function (req, res, next) {
  const { message, authorName } = req.body;

  messages.push({
    text: message,
    user: authorName,
    added: new Date(),
  });

  res.redirect("/");
});

module.exports = router;
