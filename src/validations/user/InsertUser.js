const {schemaPost} = require('../../schemas/user/userSchema');
const validateToken = require('../auth/validateLoginToken');

const validate = (req) => {
    const result = schemaPost.validate(req.body);
    if(result.error){
        return {
            error: result.error
        };
    }

    const tokenValidation = validateToken(req);
    if(tokenValidation) return true;
    
    return tokenValidation;
}

module.exports = validate;