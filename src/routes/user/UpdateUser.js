
module.exports = (app) => {
    return app.patch('/users/', (req, res) => {
        res.send('Hello World test!' + req.body.oi)
    });
}