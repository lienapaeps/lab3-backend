const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const farmSchema = new Schema ({
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    activities: [{ type: Schema.Types.ObjectId, ref: 'Activity' }],
    packages: [{ type: Schema.Types.ObjectId, ref: 'Package' }],
    
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
        number: {
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
    }],
})

const Farm = mongoose.model('Farm', farmSchema);

module.exports = Farm;