const execute = (app) => {
    return app.post('/frenRequest/:userCode', async (req, res) => {
        res.send("post request")
        
    });
}

module.exports = execute;