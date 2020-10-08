const {schemaPatch} = require('../../schemas/user/userSchema');
const ResponseExpress = require('../../helpers/ResponseExpress');
const Status = require('../../helpers/Status');

const validate = (data) => {
    const result = schemaPatch.validate(data.body);
    if(result.error){
        ResponseExpress(data.res, Status.BAD_REQUEST, result.error.details);
        return false;
    }

    return true;
}

module.exports = validate;
