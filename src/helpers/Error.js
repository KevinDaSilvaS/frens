module.exports = (res, status, error) => {
    return res.status(status).send(
        {
            status,
            error
        }
    );
}