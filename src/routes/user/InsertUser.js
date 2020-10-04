const OperationsUser = require('../../operations/user/OperationsUser');
const validateInsertUser = require('../../validations/user/InsertUser');
const { krypt } = require('../../../kcrypt/kcrypt');
const Error = require('../../enum/Error');
const Status = require('../../enum/Status');

const execute = (app) => {
    return app.post('/users/', async (req, res) => {
        //validate
        const result = validateInsertUser(req);
        if (result.error) {
            Error(res, Status.BAD_REQUEST, result.error.details);
            return;
        }

        //payload
        const {email} = req.body;
        const userCode = krypt(email);
        const user = { ...req.body, userCode };

        //save
        try {
            const savedUser = await OperationsUser.insert(user);
            res.status(Status.CREATED).send(savedUser);
        } catch (error) {
            Error(res, Status.INTERNAL_SERVER_ERROR, 'Unable to insert user.');
        }
    });
}

module.exports = execute;