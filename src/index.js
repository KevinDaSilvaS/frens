const connection = require('../database/mongo/connection/connection');
const app = require('./app/');
const port = 1133;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});