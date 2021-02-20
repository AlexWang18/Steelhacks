const logger = require('./logger')
const morgan = require('morgan')


const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (err, req, res, next) => {
    logger.error(err.message)

    next(err)
}


module.exports = {
    unknownEndpoint,
    errorHandler
}