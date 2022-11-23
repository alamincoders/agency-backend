const Message = require("../models/Message");

// message
exports.getMessage = async (req, res, next) => {
  try {
    const msg = await Message.find({});
    sendMsgRes(msg, 201, res);
  } catch (error) {
    console.log(error);
  }
};

exports.sendMessage = async (req, res) => {
  try {
    const msg = await Message.create(req.body);
    sendMsgRes(msg, 201, res);
  } catch (error) {
    console.log(error);
  }
};

const sendMsgRes = (msg, statusCode, res) => {
  res.status(statusCode).json({ success: true, msg });
};
