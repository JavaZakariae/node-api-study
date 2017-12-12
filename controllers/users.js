'use strict';

const User = require('../models/user')
const Boom = require('boom')
const UserValidate = require('../validates/users')

module.exports = {
    getAll: {
        handler: (request, reply)  => {
            User.fetchAll()
            .then(users => reply(users))
        }
    },
    get: {
        handler: (request, reply) => {
            User.where({ 'id': request.params.id })
            .fetch({ require: true })
            .then(user => reply(user))
            .catch(err => {
                if (err instanceof User.NotFoundError) {
                    return reply(Boom.notFound('Usuário não encontrado'))
                }
                reply(Boom.wrap(err))
            })
        }
    },
    create: {
        handler: (request, reply) => {
            User.forge(request.payload)
            .save()
            .then(user => reply(user))
            .catch(err => {
                reply(Boom.wrap(err))
            })
        },
        validate: UserValidate.post
    },
    update: {
        handler: (request, reply) => {
            User
            .forge({ id: request.params.id })
            .fetch({ require: true })
            .then(user =>
                user.save(request.payload)
                .then(() => reply(user))
            )
            .catch(err => {
                if (err instanceof User.NotFoundError) {
                    return reply(Boom.notFound('Usuário não encontrado'))
                }
                reply({ error: true, data: { message: err.message } })
            })
        },
        validate: UserValidate.put
    }
}
