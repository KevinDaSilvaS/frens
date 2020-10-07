const OperationsUser = require('../../operations/user/OperationsUser');
const validateLoginToken = require('../../validations/auth/validateLoginToken');
const ResponseExpress = require('../../helpers/ResponseExpress');
const Status = require('../../helpers/Status');

const execute = (app) => {
    return app.get('/users/:userCode', async (req, res) => {
        const result = validateLoginToken(req);
        if (result.error) {
            return ResponseExpress(res, Status.NOT_AUTHORIZED, result.error.details);
        }

        const {userCode} = req.params;

        try {
            const {name} = await OperationsUser.getOne({userCode});

            if(!name) {
                return ResponseExpress(res, Status.NOT_FOUND, result.error.details);
            }
            res.status(Status.OK).send({name});
        } catch (error) {
            ResponseExpress(res, Status.INTERNAL_SERVER_ERROR, 'Unable to get user.');
        }
    });
}

module.exports = execute;