const express = require('express');
const { json } = require('body-parser');
const PORT = 3001;

const { addProduct } = require('./controllers/product_controller')

const app = express();
app.use(json());

require('../db/mongodb');





//ENDPOINTS: 
app.post('/products', addProduct);





app.listen(PORT, () => console.log('Listening on port ' + PORT));