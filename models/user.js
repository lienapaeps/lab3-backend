const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    }    
});

User.plugin(passportLocalMongoose, {
    usernameField: 'email',
    selectFields: 'firstname lastname'
});

module.exports = mongoose.model('User', User);