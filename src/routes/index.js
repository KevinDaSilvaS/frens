const UpdateUser = require('./user/UpdateUser');
const InsertUser = require('./user/InsertUser');

module.exports = (app) => {
    return {
        UpdateUser: UpdateUser(app),
        InsertUser: InsertUser(app)
    }
}