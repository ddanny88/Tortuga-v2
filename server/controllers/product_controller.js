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

module.exports = {
    addProduct
}