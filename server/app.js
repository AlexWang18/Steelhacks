const express = require('express');
const path = require('path')
const middleware = require('./utils/middleware');

const app = express();
const resumeRouter = require('./controllers/resume')



app.use(express.json());

app.use(middleware.morganLogger)

app.use('/api', resumeRouter)

app.get('/', async(req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app;