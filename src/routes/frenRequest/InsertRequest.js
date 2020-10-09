const bussinessInsertRequest = require('../../bussiness/FrenRequest/InsertRequest');

const execute = (app) => {
    return app.post('/frenRequest/', async (req, res) => {

        const data = {body: req.body, res, useData: req.body};
        return bussinessInsertRequest(data);
    });
}

module.exports = execute;