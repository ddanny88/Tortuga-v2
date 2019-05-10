const express = require('express');
const { json } = require('body-parser');
const session = require('express-session');
const PORT = 5000;

const { addProduct, getProducts } = require('./controllers/product_controller')
const { registerUser, loginUser } = require('./controllers/user_controller');

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



//ENDPOINTS: 

//PRODUCT ENDPOITNS: 
app.post('/api/add/products', addProduct);
app.get('/api/products', getProducts);


//USER ENDPOITNS: 
app.post('/api/user/register', registerUser);
app.post('/api/user/login', loginUser);




app.listen(PORT, () => console.log('Listening on port ' + PORT));