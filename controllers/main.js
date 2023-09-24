const Message = require("../models/message");
const asyncHandler = require("express-async-handler");

// Display all messages on 'index'
exports.index = asyncHandler(async (req, res, next) => {
  const allMessages = await Message.find().sort({ date: 1 }).exec();
  res.render("index", { messages: allMessages });
});

// Display form to create new messages on GET
exports.form_get = asyncHandler(async (req, res, next) => {
  res.render("form");
});

// Handle form body data on POST
exports.form_post = asyncHandler(async (req, res, next) => {
  let { author, content } = req.body;

  if (author.trim() === "") {
    author = "Anonymous";
  }

  const newMessage = new Message({
    author,
    content,
    date: new Date(),
  });

  await newMessage.save();
  res.redirect("/");
});
