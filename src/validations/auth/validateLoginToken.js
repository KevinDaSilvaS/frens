const {headers} = require('../../schemas/auth/authSchema');

const validate = (req) => {
    if(req.headers.login_token) //do validations

    return true;
}

module.exports = validate;
