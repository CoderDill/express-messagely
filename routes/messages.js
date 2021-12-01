const express = require("express");

const Message = require("../models/message");

const router = new express.Router();

/** GET /:id - get detail of message.
 *
 * => {message: {id,
 *               body,
 *               sent_at,
 *               read_at,
 *               from_user: {username, first_name, last_name, phone},
 *               to_user: {username, first_name, last_name, phone}}
 *
 * Make sure that the currently-logged-in users is either the to or from user.
 *
 **/
router.get("/:id", async function (req, res, next, err) {
  try {
    const message = Message.get(req.params.id);
    console.log(message);
  } catch (err) {
    next(err);
  }
});
/** POST / - post message.
 *
 * {to_username, body} =>
 *   {message: {id, from_username, to_username, body, sent_at}}
 *
 **/
router.post("/", async function (req, res, next, err) {
  try {
    const message = Message.create(req.body);
    return res.json({ message });
  } catch (err) {
    return next(err);
  }
});
/** POST/:id/read - mark message as read:
 *
 *  => {message: {id, read_at}}
 *
 * Make sure that the only the intended recipient can mark as read.
 *
 **/
router.post("/:id/read", async function (req, res, next, err) {
  try {
    const message = Message.get(req.params.id);
    message.markedRead(id);
    return res.json({
      message: "Message read",
    });
  } catch (err) {
    return next(err);
  }
});
module.exports = router;
