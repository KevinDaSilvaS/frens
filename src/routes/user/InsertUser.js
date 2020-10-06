const OperationsUser = require('../../operations/user/OperationsUser');
const Error = require('../../helpers/Error');
const Status = require('../../helpers/Status');
const sanitize = require('../../sanitize/User/InsertUser');

const execute = (app) => {
    return app.post('/users/', async (req, res) => {
        await sanitize(req, res);
        try {
            const savedUser = await OperationsUser.insert(user);
            delete savedUser._id;
            res.status(Status.CREATED).send(savedUser);

        } catch (error) {
            Error(res, Status.INTERNAL_SERVER_ERROR, 'Unable to insert user.');
        }
    });
}

module.exports = execute;