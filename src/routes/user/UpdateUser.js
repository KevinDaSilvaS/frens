const validateUpdateUser = require('../../validations/user/UpdateUser');

module.exports = (app) => {
    return app.patch('/users/', (req, res) => {
        validateUpdateUser(req);
        res.send('Hello World test!' + req.body.oi);
    });
}