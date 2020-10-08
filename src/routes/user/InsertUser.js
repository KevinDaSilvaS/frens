const Cryptography = require('../../helpers/Cryptography');
const bussinessInsertUser = require('../../bussiness/User/InsertUser');

const execute = (app) => {
    return app.post('/users/', async (req, res) => {
        const { email, password, name } = req.body;

        const user = {};
        user.userCode = Cryptography.generateUserCode();
        user.email = await Cryptography.encryptData(email);
        user.password = await Cryptography.encryptData(password);
        user.name = name;

        const data = {body: req.body, res, useData: user};
        return bussinessInsertUser(data);
    });
}

module.exports = execute;