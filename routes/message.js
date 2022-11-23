const express = require("express");
const router = express.Router();
const { getMessage, sendMessage } = require("../controllers/messages"); // destructure

// get message
router.route("/message").post(sendMessage).get(getMessage);

module.exports = router;
