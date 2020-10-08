const UpdateUser = require('./user/UpdateUser');
const InsertUser = require('./user/InsertUser');
const GetUserById = require('./user/GetUserById');
const Login = require('./auth/login');

module.exports = (app) => {
    return {
        UpdateUser: UpdateUser(app),
        InsertUser: InsertUser(app),
        GetUserById: GetUserById(app),
        Login: Login(app),
    }
}