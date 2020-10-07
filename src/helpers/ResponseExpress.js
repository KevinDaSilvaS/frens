module.exports = (res, status, response) => {
    return res.status(status).send(
        {
            status,
            response
        }
    );
}