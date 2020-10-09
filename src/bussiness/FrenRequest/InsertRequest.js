const OperationsFrenRequest = require('../../operations/frenRequest/OperationsFrenRequest');
//const validateInsertRequest = require('../../validations/');
/* const validateUpdateUser = require('../../validations/user/UpdateUser');
const validateLoginToken = require('../../validations/auth/validateLoginToken'); */
const ResponseExpress = require('../../helpers/ResponseExpress');
const Status = require('../../helpers/Status');

const execute = async (data) => {

    //validateInsertRequest(data);

    try {
        const {userCode, email, password, name} = 
        await OperationsFrenRequest.insert(data.useData);

        const savedUser = {userCode, email, password, name};
        ResponseExpress(data.res, Status.CREATED, savedUser);

    } catch (error) {
        ResponseExpress(data.res, Status.INTERNAL_SERVER_ERROR, `Unable to insert user. Error: ${error}`);
    }
}

module.exports = execute;