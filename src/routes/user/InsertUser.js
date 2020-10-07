const Cryptography = require('../../helpers/Cryptography');
const bussinessInsertUser = require('../../bussiness/User/InsertUser');

const execute = (app) => {
    return app.post('/users/', async (req, res) => {
        const { email, password } = req.body;

        const date = new Date().getMilliseconds();
        const user = {};
        user.userCode = Cryptography.generateUserCode(email + date);
        user.email = await Cryptography.encryptData(email);
        user.password = await Cryptography.encryptData(password);
        user.name = req.body.name;

        const data = {body: req.body, headers: req.headers, res, useData: user};
        return bussinessInsertUser(data);
    });
}

module.exports = execute;