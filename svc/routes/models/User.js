const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {type: String, required: false},
    provider: {type: String, required: false},
    phone: {type: String, required: false},
    rewards: {type: Boolean, required: false},
    dob: {type: String, required: true},
    nickname: {type: String, required: false},
    iconColor: {type: String, required: false}
});

module.exports = mongoose.model('User', userSchema);