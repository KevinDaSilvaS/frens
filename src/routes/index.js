const UpdateUser = require('./user/UpdateUser');
const InsertUser = require('./user/InsertUser');
const GetUserById = require('./user/GetUserById');
const Login = require('./auth/login');

const UpdateRequest = require('./frenRequest/UpdateRequest');
const DeleteRequest = require('./frenRequest/DeleteRequest');
const GetRequests = require('./frenRequest/GetRequests');
const InsertRequest = require('./frenRequest/InsertRequest');

module.exports = (app) => {
    return {
        UpdateUser: UpdateUser(app),
        InsertUser: InsertUser(app),
        GetUserById: GetUserById(app),
        Login: Login(app),
        UpdateRequest: UpdateRequest(app),
        DeleteRequest: DeleteRequest(app),
        GetRequests: GetRequests(app),
        InsertRequest: InsertRequest(app),
    }
}