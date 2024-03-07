const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const packageSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        // required: true
    },
})

const Package = mongoose.model('Package', packageSchema);

module.exports = Package;