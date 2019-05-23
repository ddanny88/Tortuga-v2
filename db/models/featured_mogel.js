const mongoose = require('mongoose');

const featuredProduct = mongoose.model('featured-product', {
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
    discription: {
        type: String, 
        required: true,
        trim: true
    }
});

module.exports = {
    featuredProduct
}