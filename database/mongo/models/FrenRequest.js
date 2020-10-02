const mongoose = require('mongoose');

const FrenSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    requestId: {
        type: String,
        required: true,
    },
    accepted: {
        type: Boolean,
        required: false,
        default: false
    },
});

const FrenModel = mongoose.model("FrenRequest", FrenSchema);

module.exports = FrenModel;