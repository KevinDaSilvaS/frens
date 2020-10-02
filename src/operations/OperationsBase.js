const connection = require('../../database/mongo/connection/connection');

operationsBase = {
    list: async (model, query) => {
        return await model.find(query);
    },
    getOne: async (model, query) => {
        return await model.findOne(query);
    },
    insert: async (data) => {
        return await data.save();
    },
    update: async (model, query, replace) => {
        return await model.updateMany(query, replace);
    },
    delete: async (model, query) => {
        return await model.deleteMany(query);
    }
}

module.exports = operationsBase;