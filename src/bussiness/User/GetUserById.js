const OperationsUser = require('../../operations/user/OperationsUser');
const validateLoginToken = require('../../validations/auth/validateLoginToken');
const ResponseExpress = require('../../helpers/ResponseExpress');
const Status = require('../../helpers/Status');

const execute = async (data) => {

    validateLoginToken(data);
    const {userCode} = data.params;

    try {
        const user = await OperationsUser.getOne({userCode});

        if(!user) {
            return ResponseExpress(res, Status.NOT_FOUND, 'Unable find user.');
        }
        ResponseExpress(data.res, Status.OK, {name: user.name});
    } catch (error) {
        ResponseExpress(data.res, Status.INTERNAL_SERVER_ERROR, error);
    }
}

module.exports = execute;