const express = require("express");
const router = express.Router();
const path = require("path");
const fileUpload = require("express-fileupload");

const logger = require("../utils/logger");

router.post("/", async (req, res) => {
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: "No file uploaded",
      });
    } else {
      let file = req.files.resume;
      const uploadPath = path.resolve(__dirname, "../../assets", file.name);
      //console.log(uploadPath)
      file.mv(uploadPath, (err) => {
        console.log(err);
      });
      res.send({
        message: "File is uploaded",
        data: {
          name: file.name,
          mimetype: file.mimetype,
        },
      });
    }
  } catch (err) {
    logger.error(err);
    res.status(500).send(err);
  }
});

module.exports = router;
