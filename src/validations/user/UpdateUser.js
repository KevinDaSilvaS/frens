const {schemaPatch} = require('../../schemas/user/userSchema');
const validateToken = require('../auth/validateLoginToken');

const validate = (req) => {
    console.log(schemaPatch.validate(req.body));
    validateToken(req);

    return true;
}

module.exports = validate;
