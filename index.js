const config = require('./server/utils/config')
const logger = require('./server/utils/logger')

const app = require('./server/app')
const http = require('http')

const server = http.createServer(app)

server.listen(config.PORT, (err) => {
    if(err) logger.error(err)
    logger.info(`Server running on ${config.PORT}`)
})