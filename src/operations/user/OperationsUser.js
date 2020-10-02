const OperationBase = require('../OperationsBase');
const User = require('../../../database/mongo/Users/User');

OperationBase.list = async (query) => {
    return await User.find(query);
}

OperationBase.getOne = async (query) => {
    return await User.findOne(query);
}

OperationBase.update = async (query, replace) => {
    return await User.updateMany(query, replace);
}

module.exports = OperationBase;