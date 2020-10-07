const OperationsUser = require('../../operations/user/OperationsUser');
const validateInsertUser = require('../../validations/user/InsertUser');
const validateLoginToken = require('../../validations/auth/validateLoginToken');
const ResponseExpress = require('../../helpers/ResponseExpress');
const Status = require('../../helpers/Status');

const execute = async (data) => {

    validateInsertUser(data);
    validateLoginToken(data);

    try {
        //const {userCode, email, password, name} = await OperationsUser.insert(data.useData);
        const savedUser = await OperationsUser.insert(data.useData);
        savedUser._id = undefined;
        ResponseExpress(data.res, Status.CREATED, savedUser);

    } catch (error) {
        ResponseExpress(data.res, Status.INTERNAL_SERVER_ERROR, 'Unable to insert user.');
    }
}

module.exports = execute;