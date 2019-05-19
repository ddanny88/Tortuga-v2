/**
 *  addToCart: when an item is added to the cart, the item object is pushed into the req.session.cart and displayed in the cart. 
 * additional functionality to calulate the price. Use composition. 
*/


const getCart = (req, res) => {
    res.status(200).json(req.session.cart);
}

const addToCart = (req, res) => {
    console.log("added to cart",req.body)
   let item = req.body;
   req.session.cart.push(item);
   res.status(200).json(req.session.cart)
}


module.exports = {
    addToCart,
    getCart
}


