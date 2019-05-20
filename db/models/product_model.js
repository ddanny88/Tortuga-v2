const mongoose = require('mongoose');
// validator goes here;

const Product = mongoose.model('Product', {
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number, 
        required: true,
    },
    size: {
        type: String,
        required: true
    },
    img:{
        type: String
    },
    category: {
        type: String, 
        required: true,
        trim: true
    },
    quantity: {
        type: Number,
        required: true
    },
    discription: {
        type: String, 
        required: true,
        trim: true
    }
});

module.exports = {
    Product
}