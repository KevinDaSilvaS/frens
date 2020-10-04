const {schemaPost} = require('../../schemas/user/userSchema');

const validate = (req) => {
    const result = schemaPost.validate(req.body);
    if(result.error){
        return {
            error: result.error
        };
    }
    
    return true;
}

module.exports = validate;