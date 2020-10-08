const OperationsUser = require('../../operations/user/OperationsUser');
const validateInsertUser = require('../../validations/user/InsertUser');
const ResponseExpress = require('../../helpers/ResponseExpress');
const Status = require('../../helpers/Status');

const execute = async (data) => {

    validateInsertUser(data);

    try {
        const {userCode, email, password, name} = await OperationsUser.insert(data.useData);
        const savedUser = {userCode, email, password, name};
        ResponseExpress(data.res, Status.CREATED, savedUser);

    } catch (error) {
        ResponseExpress(data.res, Status.INTERNAL_SERVER_ERROR, `Unable to insert user. Error: ${error}`);
    }
}

module.exports = execute;