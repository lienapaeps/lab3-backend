const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const farmSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    streetnumber: {
        type: String,
        required: true
    },
    postalcode: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    location: {
        "lat": {
            type: Number,
            required: true
        },
        "lng": {
            type: Number,
            required: true
        }
    },
})

const Farm = mongoose.model('Farm', farmSchema);

module.exports = Farm;