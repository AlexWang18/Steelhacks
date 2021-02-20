const express = require('express');
const path = require('path')
const middleware = require('./utils/middleware');
const morgan = require('morgan')

const app = express();
const resumeRouter = require('./controllers/resume')
const pdfRouter = require('./controllers/pdf')


app.use(express.json());

app.use(morgan('tiny'))

app.use('/api', resumeRouter)

app.use('/pdf', pdfRouter)

app.get('/', async(req, res) => {
    res.send('<h1>Hello World!</h1>')
})


app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app;