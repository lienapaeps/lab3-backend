const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const farmSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    farmImage: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    adress: {
        street: {
            type: String,
            required: true
        },
        streetnumber: {
            type: String,
            required: true
        },
        zipcode: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        }
    },
    coordinates: {
        latitude: {
            type: Number,
            required: true
        },
        longitude: {
            type: Number,
            required: true
        }
    },
    openinghours: [{
        day: {
            type: String,
            required: true
        },
        openinghour: {
            type: String,
            // required: true
        },
        closinghour: {
            type: String,
            // required: true
        }
    }]
})

const Farm = mongoose.model('Farm', farmSchema);

module.exports = Farm;