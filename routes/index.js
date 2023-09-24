const controller = require("../controllers/main");
const express = require("express");
const router = express.Router();

// Sample messages
const messages = [
  {
    text: "Hi there!",
    author: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", controller.index);

/* GET form */
router.get("/new", controller.form_get);

/* POST new message */
router.post("/new", controller.form_post);

module.exports = router;
