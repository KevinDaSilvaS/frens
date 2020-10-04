docker run --name mongofrens -e MONGO_INITDB_ROOT_USERNAME=kevindasilva -e MONGO_INITDB_ROOT_PASSWORD=frensapplication -p 27017:27017  mongo

https://stackoverflow.com/questions/4881208/how-to-secure-mongodb-with-username-and-password


const connection = require('../database/mongo/connection/connection');
const OperationsUser = require('./operations/user/OperationsUser');

const contact = {
    name: 'kevin',
    email: "kevin.kds700@gmail.com",
    password: '12345',
};

const i = OperationsUser.insert(contact)
i.then( k => console.log(k)).catch(l => console.log(l))

