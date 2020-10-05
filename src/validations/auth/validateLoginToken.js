const {headers} = require('../../schemas/auth/authSchema');

const validate = (req) => {
    const token = req.headers.login_token;
    const result = headers.validate(token);
    
    if(result.error) return {
        error: result.error
    };

    //do validations

    return true;
}

module.exports = validate;
