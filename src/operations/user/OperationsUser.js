const OperationBase = require('../OperationsBase');
const User = require('../../../database/mongo/models/User');

OperationBase.insert = async (data) => {
    const user = new User(data);
    return await user.save();
}

OperationBase.list = async (query) => {
    return await User.find(query);
}

OperationBase.getOne = async (query) => {
    return await User.findOne(query);
}

OperationBase.update = async (query, replace) => {
    const updatedUser = await User.updateMany(query, replace);
    if(updatedUser.ok > 0) return true;
    return false;
}

module.exports = OperationBase;