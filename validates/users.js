'use strict';

const Joi = require('joi');

module.exports = {
    post: {
        payload: {
            name: Joi.string(),
            email: Joi.string().email(),
            password: Joi.string()
        }
    },
    put: {
        payload: {
            id: Joi.string(),
            name: Joi.string().min(10).max(50).optional(),
            email: Joi.string().email().min(10).max(50).optional(),
        }
    }
}
