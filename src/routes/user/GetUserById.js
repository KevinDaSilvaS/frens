const bussinessGetUserById = require('../../bussiness/User/GetUserById');

const execute = (app) => {
    return app.get('/users/:userCode', async (req, res) => {

        const data = {params: req.params, headers: req.headers, res};
        bussinessGetUserById(data);
    });
}

module.exports = execute;