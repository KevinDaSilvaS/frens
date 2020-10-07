const {headers} = require('../../schemas/auth/authSchema');
const ResponseExpress = require('../../helpers/ResponseExpress');
const Status = require('../../helpers/Status');

const validate = (data) => {
    const result = headers.validate(data.headers);
    
    if(result.error) {
        ResponseExpress(data.res, Status.NOT_AUTHORIZED, result.error.details);
    };

    //do validations

    return true;
}

module.exports = validate;
