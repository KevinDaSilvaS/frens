const Cryptography = require('../../helpers/Cryptography');
const bussinessUpdateUser = require('../../bussiness/User/UpdateUser');

module.exports = (app) => {
    return app.patch('/users/:userCode', async (req, res) => {
        
        const user = {};
        if(req.body.password) user.password = await Cryptography.encryptData(
            req.body.password);
        if(req.body.name) user.name = req.body.name;

        const data = {body: req.body, params: req.params, headers: req.headers, useData: user, res} 
        bussinessUpdateUser(data);
    });
}