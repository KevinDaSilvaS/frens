const Joi = require('joi');

const schemaPost = Joi.object({
    name: Joi.string().required(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),

    userCode: Joi.string().forbidden(),
});

const schemaPatch = Joi.object({
    name: Joi.string(),

    email: Joi.string().forbidden(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
});

module.exports = { schemaPatch, schemaPost }