const config = require("../utils/config");
const logger = require("../utils/logger");
const path = require("path");
const fs = require("fs"); // file system module

const express = require("express");
const router = express.Router();

const assets = path.resolve(__dirname, "../../assets");

router.get("^/i(nfo)?(moration)?", async (req, res) => {
  fs.readdir(assets, (err, files) => {
    if (err)
      res.status(500).json({ error: "There was an issue fetching the files" });
    if (files.length) {
      res.json({ message: `There are ${files.length} resumes available`, available: files.length });
    }
  });
});

router.get("/pdf/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const file = __dirname + `/../../assets/${id}.pdf`;
    if (!file) {
      res.json({ error: "no file such file exists" });
    }
    //const filePath = path.resolve(__dirname, `../../assets/${id}`);

    // console.log(filePath);

    res.download(file, (err) => {
      if (err) {
        logger.error(err);
      } else logger.info("success");
    });
  } catch (err) {
    logger.error(err);
  }
});

router.get("/test", (req, res) => {
  res.json({ message: "hi" });
});

module.exports = router;
