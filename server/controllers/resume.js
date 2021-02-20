const config = require('../utils/config')

const express = require('express')

const router = express.Router();

router.get('/test', (req, res) => {
    res.json({hi})
})

router.get('/resume', (req, res) => {
    const body = req.body
    res.send('<p> hi </p>')
})


router.get('/AlexWang', async(req, res) => {
    const file = `${__dirname}/../../assets/AlexWang.pdf`;
    res.download(file);
})

router.get('/:id', async(req, res) => {
    // find the document with mongoose?
    const file = `${__dirname}/../../assets/${id}.pdf`
    res.send(file)
})

module.exports = router;