const {headers} = require('../../schemas/auth/authSchema');

const validate = (req) => {
    const result = headers.validate(req.headers);
    
    if(result.error) return {
        error: result.error
    };

    //do validations

    return true;
}

module.exports = validate;
