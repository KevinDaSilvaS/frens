const OperationsUser = require('../../operations/user/OperationsUser');
const validateUpdateUser = require('../../validations/user/UpdateUser');
const validateLoginToken = require('../../validations/auth/validateLoginToken');
const validateTokenParams = require('../../validations/auth/validateTokenParams');
const ResponseExpress = require('../../helpers/ResponseExpress');
const Status = require('../../helpers/Status');

const execute = async (data) => {

    validateLoginToken(data);
    validateTokenParams(data);
    validateUpdateUser(data);

    try {
        const updatedUser = await OperationsUser.update(
            data.params, data.useData);

        if(updatedUser) ResponseExpress(data.res, Status.OK, {});

    } catch (error) {
        ResponseExpress(data.res, Status.INTERNAL_SERVER_ERROR, 
            `Unable to update user. Error: ${error}`);
    }
}

module.exports = execute;