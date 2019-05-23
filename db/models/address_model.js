const mongoose = require('mongoose');

const Address = mongoose.model('Address', {
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipcode: {
        type: String, 
        required: true
    }
});

module.exports = {
    Address
}