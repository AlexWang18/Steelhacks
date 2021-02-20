const express = require("express");
const path = require("path");
const middleware = require("./utils/middleware");
const morgan = require("morgan");
require("express-async-errors");

const app = express();
const fileUpload = require("express-fileupload");

const resumeRouter = require("./controllers/resume");
const uploadRouter = require("./controllers/upload");
const grammarRouter = require("./controllers/grammar");

app.use(express.json());
app.use(fileUpload({ safeFileNames: true, preserveExtension: true }));
app.use(morgan("tiny"));

app.use("/api", resumeRouter);
app.use("/upload", uploadRouter);
app.use("/check", grammarRouter);


app.use(express.static(path.resolve(__dirname, '../frontend/build')));
// serve static build files

app.get("/", async (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
