const path = require("path");
const logger = require("../utils/logger");

const express = require("express");
const router = express.Router();

const PDFExtract = require('pdf.js-extract').PDFExtract;
const pdfExtract = new PDFExtract(); // reads our pdf files

const regex = "^\s+[A-Za-z,;'\"\\s]+[.?!]$"

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const file = __dirname + `/../../assets/${id}.pdf`;
  if (!file) {
    res.json({ error: "no file such file exists" });
  }
  pdfExtract.extract(file, {}, (err, data) => {
      if(err) return console.log(err)
      logger.info(data.pages[0].content.map(line => line.str).join(' '));
  })
  res.json({message: "You have one spelling error on line 4"})
});

module.exports = router;
/* fs.readFile(file, "utf8", (err, data) => {
    if (err) logger.error(err);

    logger.info(data);
    res.json({message: "You have one spelling error on line 4"})
  }); */