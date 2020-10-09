const OperationBase = require('../OperationsBase');
const FrenRequest = require('../../../database/mongo/models/FrenRequest');

OperationBase.insert = async (data) => {
    const frenRequest = new FrenRequest(data);
    return await frenRequest.save();
}

OperationBase.list = async (query) => {
    return await FrenRequest.find(query);
}

OperationBase.getOne = async (query) => {
    return await FrenRequest.findOne(query);
}

OperationBase.update = async (query, replace) => {
    const updatedFrenRequest = await FrenRequest.updateMany(query, replace);
    if(updatedFrenRequest.ok > 0) return true;
    return false;
}

module.exports = OperationBase;