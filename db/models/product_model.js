const mongoose = require('mongoose');
// validator goes here;

const Product = mongoose.model('Product', {
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number, 
        required: true
    }
});

module.exports = {
    Product
}