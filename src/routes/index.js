const UpdateUser = require('./user/UpdateUser');
const InsertUser = require('./user/InsertUser');
const GetUserById = require('./user/GetUserById');
const Login = require('./auth/login');

module.exports = (app) => {
    UpdateUser(app);
    InsertUser(app);
    GetUserById(app);
    Login(app);
}