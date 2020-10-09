const OperationsUser = require('../../operations/user/OperationsUser');
const validateLoginToken = require('../../validations/auth/validateLoginToken');
const validateTokenParams = require('../../validations/auth/validateTokenParams');
const ResponseExpress = require('../../helpers/ResponseExpress');
const Status = require('../../helpers/Status');

const execute = async (data) => {
    try {
        validateLoginToken(data);
        await validateTokenParams(data);
        const {userCode} = data.params;

        const {name} = await OperationsUser.getOne({userCode});

        if(!name) return ResponseExpress(res, Status.NOT_FOUND, 
            'Unable find user.');
        
        ResponseExpress(data.res, Status.OK, {name, userCode});
    } catch (error) {
        ResponseExpress(data.res, Status.INTERNAL_SERVER_ERROR, error);
    }
}

module.exports = execute;