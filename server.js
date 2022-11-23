require("dotenv").config({ path: "./config.env" });
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const ErrorHandler = require("./middilewares/error");

// connect db
connectDB();
//
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());
app.use("/api", require("./routes/message"));
// Error handler (Should be last piece of middleware)
app.use(ErrorHandler);

const server = app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

process.on("unhandledRejection", (error, promise) => {
  console.log(`Error : ${error}`);
  server.close(() => process.exit(1));
});
