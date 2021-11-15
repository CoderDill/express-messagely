const express = require("express");
const router = new express.Router();
const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR } = require("../config");
const client = require("../db");

/** POST /login - login: {username, password} => {token}
 *
 * Make sure to update their last-login!
 *
 **/

router.post("/register", async function (req, res, next) {
  try {
    
  } catch (e) {
    return next(e);
  }
});
/** POST /register - register user: registers, logs in, and returns token.
 *
 * {username, password, first_name, last_name, phone} => {token}.
 *
 *  Make sure to update their last-login!
 */
module.exports = router;
