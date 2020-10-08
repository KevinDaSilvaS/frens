const {headers} = require('../../schemas/auth/authSchema');
const ResponseExpress = require('../../helpers/ResponseExpress');
const Status = require('../../helpers/Status');

const date = new Date().getTime();
const day = 86400000;

const validate = (data) => {
    const result = headers.validate(data.headers);
    
    if(result.error) {
        ResponseExpress(data.res, Status.NOT_AUTHORIZED, result.error.details);
        return false;
    };

    const {login_token} = data.headers;

    try {
        const splitted = login_token.split('#!#');
        const limit = parseInt(splitted[2]) + day;

        if(splitted.length < 3 || date > limit){
            ResponseExpress(data.res, Status.NOT_AUTHORIZED, 
                'Token expired. Make sure you are logged in.');
        }
    } catch (error) {
        ResponseExpress(data.res, Status.NOT_AUTHORIZED, 'Token invalid.');
    }

    return true;
}

module.exports = validate;
