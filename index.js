const config = require('./server/utils/config')

const app = require('./server/app')
const http = require('http')

const server = http.createServer(app)

server.listen(config.PORT, (err) => {
    if(err) console.log(err)
    console.log(`Server running on ${config.PORT}`)
})