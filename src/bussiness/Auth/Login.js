const OperationsUser = require('../../operations/user/OperationsUser');
const ResponseExpress = require('../../helpers/ResponseExpress');
const GenerateToken = require('../../helpers/GenerateToken');
const Status = require('../../helpers/Status');

const execute = async (data) => {

    try {
        const {email, password} = data.useData;
        
        const {_id, userCode} = await OperationsUser.getOne({email, password});

        if(!userCode) ResponseExpress(data.res, 
            Status.NOT_FOUND, 'Unable to found user');

        const login_token = GenerateToken({_id, userCode});

        ResponseExpress(data.res, Status.OK, {login_token});
    } catch (error) {
        ResponseExpress(data.res, Status.INTERNAL_SERVER_ERROR, error);
    }
}

module.exports = execute;