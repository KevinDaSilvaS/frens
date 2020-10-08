const {headers} = require('../../schemas/auth/authSchema');
const ResponseExpress = require('../../helpers/ResponseExpress');
const Status = require('../../helpers/Status');

const day = 86400000;

const validate = (data) => {
    const result = headers.validate(data.headers);
    
    if(result.error) {
        ResponseExpress(data.res, Status.NOT_AUTHORIZED, result.error.details);
    };

    /* const {login_token} = data.headers;

    const splitted = login_token.split('#!#'); */


    //do validations
    //get user code and _id + miliseconds date

    return true;
}

module.exports = validate;
