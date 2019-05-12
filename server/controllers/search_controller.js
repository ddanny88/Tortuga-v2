const { Product } = require('../../db/models/product_model');

const searchProducts = async (req, res) => {
    let searchTerm = req.query.search;
    let products = await Product.find({});
    let foundItems = products.filter(val => val.name.toLowerCase().includes(searchTerm.toLowerCase()));
    if (foundItems) {
        res.status(200).json(foundItems);
    } else if (foundItems.length === 0) {
        res.status(404).json({error: 'NO ITEM MATCHES...'})
    }
}

module.exports = {
    searchProducts
}