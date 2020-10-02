const mongoose = require('mongoose');
const connection = require('../database/mongo/connection/connection');

const User = require('../database/mongo/models/User');
const FrenRequest = require('../database/mongo/models/FrenRequest');

/* const contact = new User({
    name: 'kevin',
    email: "kevin.kds800@gmail.com",
    password: '12345',
});

const saved = async() => {
    const insertedContact = await contact.save();
    console.log(insertedContact);
} */
//saved()

/* const find = async (item, search) => {
    const list = await item.find(search);
    console.log(list);
    return list;
}

find(User, {}); */
//5f7740c848388106f8f7595c
//5f7740fef96e6736700b194e

/* const request = new FrenRequest({
    userId: '5f7740c848388106f8f7595c',
    requestId: "5f7740fef96e6736700b194e",
});

const savedReq = async() => {
    const insertedContact = await request.save();
    console.log(insertedContact);
}
savedReq() */