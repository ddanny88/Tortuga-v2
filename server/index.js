const express = require('express');
const { json } = require('body-parser');
const PORT = 5000;

const { addProduct, getProducts } = require('./controllers/product_controller')

const app = express();
app.use(json());

require('../db/mongodb');





//ENDPOINTS: 
app.post('/api/add/products', addProduct);
app.get('/api/products', getProducts);






app.listen(PORT, () => console.log('Listening on port ' + PORT));