const UpdateUser = require('./user/UpdateUser');
module.exports = (app) => {
    return {
        UpdateUser: UpdateUser(app)
    }
}