const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {type: String, required: false},
    dob: {type: Date, required: true},
    nickname: {type: String, required: false},
    iconColor: {type: String, required: false}
});

module.exports = mongoose.model('User', userSchema);