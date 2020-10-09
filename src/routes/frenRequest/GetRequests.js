const execute = (app) => {
    return app.get('/frenRequest/:userCode', async (req, res) => {
        res.send("get request")
        
    });
}

module.exports = execute;