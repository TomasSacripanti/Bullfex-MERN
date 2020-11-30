const { Schema, model } = require('mongoose');

const potentialClient = new Schema({
    name: String,
    email: String,
    phone: Number,
    website: String,
    comment: String,
}, {
    timestamps: true,
});

module.exports = model('PotentialClient', potentialClient);

