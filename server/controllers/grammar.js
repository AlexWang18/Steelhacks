const path = require("path");
const logger = require("../utils/logger");

const express = require("express");
const router = express.Router();

const PDFExtract = require("pdf.js-extract").PDFExtract;
const pdfExtract = new PDFExtract(); // reads our pdf files

const Typo = require("typo-js");

const dictionary = new Typo("en_US");

const isSentence = (line) => {
  const words = line.split(" ");

  if (words.length <= 2) return false;

  else if (line.length <= 2) return false; // abbrievations
  
  else if (line == "\t" || line == " " || line == "-") return false;
  
  else if (line.match('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$ ')) return false; // phone numbers
  
  else if (line.match('^\d{1,2}(\/?|\-?)\d{4}$')) return false; // dates
  // add more tests

  return true;
};

let possibleErrors = [];
/*

*/
const checkSpelling = (line) => {
  let errors = line.split(" ").filter((w) => !dictionary.check(w)); // check with Typo library
  console.log(errors);
  possibleErrors = possibleErrors.concat(errors);
};

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const file = __dirname + `/../../assets/${id}.pdf`;
  if (!file) {
    res.json({ error: "no such file exists" });
  }
  let text = "";
  pdfExtract.extract(file, {}, (err, data) => {
    if (err) return console.log(err);
    text = data.pages[0].content
      .map((line) => line.str)
      .filter((l) => isSentence(l));
    
    text.forEach((line) => !checkSpelling(line));
    res.json({ PossibleErrors: possibleErrors });
  });
  
  //res.json({ message: `You have one spelling error on line 4` });
});

module.exports = router;
