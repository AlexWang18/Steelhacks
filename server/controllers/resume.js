const config = require("../utils/config");
const logger = require("../utils/logger");
const path = require("path");

const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ message: "hi" });
});

router.get("/pdf/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const file = __dirname + `/../../assets/${id}.pdf`;
    if(!file) {
        res.json({error: "no file such file exists"})
    }
    const filePath = path.resolve(__dirname, `../../assets/${id}`);
    
    console.log(filePath);

    res.download(file, (err) => {
      if (err) {
        logger.error(err);
      } else logger.info("success");
    });
  } catch (err) {
    logger.error(err);
  }
});

router.get("/AlexWang", async (req, res) => {
  const file = `${__dirname}/../../assets/AlexWang.pdf`;
  res.download(file, (err) => {
    if (err) {
      logger.error(err);
    } else logger.info("success");
  });
});

module.exports = router;
