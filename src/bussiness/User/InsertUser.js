const OperationsUser = require('../../operations/user/OperationsUser');
const validateInsertUser = require('../../validations/user/InsertUser');
const validateLoginToken = require('../../validations/auth/validateLoginToken');
const ResponseExpress = require('../../helpers/ResponseExpress');
const Status = require('../../helpers/Status');

const execute = async (data) => {

    validateInsertUser(data);
    validateLoginToken(data);

    try {
        const savedUser = await OperationsUser.insert(data.useData);
        delete savedUser._id;
        ResponseExpress(data.res, Status.CREATED, savedUser);

    } catch (error) {
        ResponseExpress(data.res, Status.INTERNAL_SERVER_ERROR, 'Unable to insert user.');
    }
}

module.exports = execute;