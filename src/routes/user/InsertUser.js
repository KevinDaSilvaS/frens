const Cryptography = require('../../helpers/Cryptography');
const bussinessInsertUser = require('../../bussiness/User/InsertUser');

const execute = (app) => {
    return app.post('/users/', async (req, res) => {
        const { email, password } = req.body;

        const user = Object.assign({}, req.body);;
        user.userCode = Cryptography.generateUserCode();
        user.email = await Cryptography.encryptData(email);
        user.password = await Cryptography.encryptData(password);

        const data = {body: req.body, res, useData: user};
        return bussinessInsertUser(data);
    });
}

module.exports = execute;