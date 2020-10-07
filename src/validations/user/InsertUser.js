const {schemaPost} = require('../../schemas/user/userSchema');
const ResponseExpress = require('../../helpers/ResponseExpress');
const Status = require('../../helpers/Status');

const validate = (data) => {
    const result = schemaPost.validate(data.body);
    if(result.error){
        ResponseExpress(data.res, Status.BAD_REQUEST, result.error.details);
        return false;
    }

    if(tokenValidation) return true;
    
    return tokenValidation;
}

module.exports = validate;