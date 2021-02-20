const express = require('express');
const path = require('path')
const middleware = require('./utils/middleware');
const morgan = require('morgan')

const app = express();
const fileUpload = require('express-fileupload')

const resumeRouter = require('./controllers/resume')
const uploadRouter = require('./controllers/upload')


app.use(express.json());
app.use(fileUpload({ safeFileNames: true, preserveExtension: true }))
app.use(morgan('tiny'))

app.use('/api', resumeRouter)

app.use('/upload', uploadRouter)

app.get('/', async(req, res) => {
    res.send('<h1>Hello World!</h1>')
})


app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app;