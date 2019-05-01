const { Product } = require('../../db/models/product_model');


const addProduct = async (req, res) => {
    try {
        const newProduct = await new Product(req.body);
        const saveProduct = await newProduct.save();
        res.status(201).json(newProduct);
    } catch(e) {
        res.status(500).json({error: "UNABLE TO ADD PRODUCT"})
    }
}

const getProducts = async (req, res) => {
    try {
        let response = await Product.find({});
        res.status(200).json(response);
    } catch(e){
        console.log(e)
        res.status(404).json({error: 'COULD NOT GET PRODUCTS'})
    }
}

module.exports = {
    addProduct,
    getProducts
}