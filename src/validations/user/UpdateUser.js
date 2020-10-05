const {schemaPatch} = require('../../schemas/user/userSchema');
const validateToken = require('../auth/validateLoginToken');

const validate = (req) => {
    validateToken(req);

    return true;
}

module.exports = validate;
