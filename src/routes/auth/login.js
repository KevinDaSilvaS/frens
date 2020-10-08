const Cryptography = require('../../helpers/Cryptography');
const bussinessLogin = require('../../bussiness/Auth/Login');

const execute = (app) => {
    return app.post('/login/', async (req, res) => {
        
        req.body.email = await Cryptography.encryptData(req.body.email);
        req.body.password = await Cryptography.encryptData(req.body.password);

        const data = {res, useData: req.body};
        return bussinessLogin(data);
    });
}

module.exports = execute;