const mongoose = require('mongoose');
const validator = require('validator');


const User = mongoose.model('User', {
    isAdmin: {
        type: Boolean
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('PLEASE ENTER VALID EMAIL ADDRESS');
            }
        }
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    zipcode: {
        type: String,
        required: true
    }
});


module.exports = {
    User
}


// {
//     "_id": "5cd4ba69ee01652458d0910a"
//      "isAdmin": false,
//     "firstName": "Daniel",
//     "lastName": "Dominguez",
//     "username": "daniel123",
//     "password": "passy",
//     "email": "daniel@email.com",
//     "city": "Dallas",
//     "state": "TX",
//     "address" :"111 Street Dr",
//     "zipcode": "12345"
// }




// {
//     "username": "daniel123",
//     "password": "passy"
// }