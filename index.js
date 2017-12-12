'use strict'

const Hapi = require('hapi')
const UsersRoute = require('./routes/user')

const server = new Hapi.Server()
server.connection({ port:5000 })

server.route(UsersRoute)

server.start((err) => {
    if (err) {
        throw err
    }
    console.log('Server running at:', server.info.uri)
})
