const {headers} = require('../../schemas/auth/authSchema');

const validate = (req) => {
    console.log(headers.validate(req.headers));

    if(req.headers.login_token) //do validations

    return true;
}

module.exports = validate;
