const {headers} = require('../../schemas/auth/authSchema');
const ResponseExpress = require('../../helpers/ResponseExpress');
const Status = require('../../helpers/Status');
const OperationsUser = require('../../operations/user/OperationsUser');

const validate = async (data) => {
    const {login_token} = data.headers;
    const userCode = data.params.userCode;

    try {
        const splitted = login_token.split('#!#');

        const user = await OperationsUser.getOne({_id: splitted[0]});

        if(user.userCode != userCode || splitted[1] != userCode){
            return ResponseExpress(data.res, Status.NOT_AUTHORIZED, 
                'Token invalid or params UserCode invalid.');
        }
        
    } catch (error) {
        return ResponseExpress(data.res, Status.INTERNAL_SERVER_ERROR, 
            'Token invalid.');
    }

    return true;
}

module.exports = validate;
