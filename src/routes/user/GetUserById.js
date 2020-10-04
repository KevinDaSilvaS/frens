const OperationsUser = require('../../operations/user/OperationsUser');
const validateLoginToken = require('../../validations/auth/validateLoginToken');
const Error = require('../../enum/Error');
const Status = require('../../enum/Status');

const execute = (app) => {
    return app.get('/users/:userCode', async (req, res) => {
        const result = validateLoginToken(req);
        if (result.error) {
            return Error(res, Status.NOT_AUTHORIZED, result.error.details);
        }

        const {userCode} = req.params;

        try {
            const {name, email} = await OperationsUser.getOne({userCode});

            if(!email) {
                return Error(res, Status.NOT_FOUND, result.error.details);
            }
            res.status(Status.OK).send({name, email});
        } catch (error) {
            Error(res, Status.INTERNAL_SERVER_ERROR, 'Unable to get user.');
        }
    });
}

module.exports = execute;