const express = require('express');
const { json } = require('body-parser');
const session = require('express-session');
const PORT = 5000;

const { addProduct, getProducts } = require('./controllers/product_controller');
const { registerUser, loginUser, getUser, logout } = require('./controllers/user_controller');
const { searchProducts } = require('./controllers/search_controller');
const { checkCart } = require('./middlewares/auth_middleware');
const { addToCart, getCart, removeItem, grandSubTotal } = require('./controllers/cart_controller')
const { addAddress } = require('./controllers/address_controller');



const app = express();
app.use(json());

require('../db/mongodb');

app.use( 
    session({
        secret: 'tortuga secret',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 24 * 60 * 60 * 1000
        }
    })
);



// ENDPOINTS: 

// PRODUCT ENDPOITNS: 
app.post('/api/add/products', addProduct);
app.get('/api/products', getProducts);

// FEATURED PRODUCT ENDPOINTS:
// get 
// post 
/**
 * The admin should have the ability to request certain product docuents from the products collections and place them inside of the featured products collection to be displayed in the featured prodects section. 
*/

// SEARCH ENDPOITS: 
app.get('/api/products/find', searchProducts);

// USER ENDPOITNS: 
app.post('/api/user/register', registerUser);
app.post('/api/user/login', loginUser);
app.get('/api/get/user', getUser);
app.get('/api/user/logout', logout);

// CART ENDPOINTS: 
app.post('/api/user/cart', checkCart, addToCart);
app.get('/api/get/cart', getCart);
app.delete('/api/cart/:id', removeItem);
app.get('/api/cart/subtotal', grandSubTotal);

// ADDRESS ENDPOINTS: 
app.post('/api/user/address', addAddress);


app.listen(PORT, () => console.log('Listening on port ' + PORT));



// {
    
//     "address": "111 main st",
//     "city": "Dallas",
//     "state": "Texas",
//     "zipcode": "123456"
// }