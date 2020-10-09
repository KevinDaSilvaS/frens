const execute = (app) => {
    return app.delete('/frenRequest/:requestId', async (req, res) => {
        res.send("delete request")
        
    });
}

module.exports = execute;