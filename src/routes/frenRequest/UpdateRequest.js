const execute = (app) => {
    return app.patch('/frenRequest/:requestId', async (req, res) => {
        res.send("patch request")
        
    });
}

module.exports = execute;