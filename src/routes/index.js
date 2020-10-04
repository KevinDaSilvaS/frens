const UpdateUser = require('./user/UpdateUser');
const InsertUser = require('./user/InsertUser');
const GetUserById = require('./user/GetUserById');

module.exports = (app) => {
    return {
        UpdateUser: UpdateUser(app),
        InsertUser: InsertUser(app),
        GetUserById: GetUserById(app)
    }
}