const validateUpdateUser = require('../../validations/user/UpdateUser');

module.exports = (app) => {
    return app.patch('/users/:userid', (req, res) => {
        const result = validateUpdateUser(req);
        res.send('Hello World test!' + req.body.oi);
    });
}