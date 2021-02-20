const logger = require('./logger')
const morgan = require('morgan')

morgan.token('content', (req, res) => {
    return req.body.name + ' ' + req.body.number
}) 

const morganLogger = morgan(':method :url :status res[content-length] - :response-time ms :content', {
    skip: (req, res) => req.method !== 'POST' || req.method !== 'PUT' || req.method !== 'DELETE'
})


const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (err, req, res, next) => {
    logger.error(err.message)

    next(err)
}


module.exports = {
    morganLogger,
    unknownEndpoint,
    errorHandler
}