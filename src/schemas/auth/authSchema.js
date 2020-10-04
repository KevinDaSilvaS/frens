const Joi = require('joi');

const headers = Joi.object({
    'login_token': Joi.string().required()
}).options({ allowUnknown: true })

module.exports = { headers }