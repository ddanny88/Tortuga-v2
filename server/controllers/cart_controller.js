/**
 *  addToCart: when an item is added to the cart, the item object is pushed into the req.session.cart and displayed in the cart. 
 * additional functionality to calulate the price. Use composition. 
*/


const getCart = (req, res) => {
    res.status(200).json(req.session.cart);
}

const addToCart = (req, res) => {
    console.log(req.body)
    let item = req.body;
    if (req.session.cart.length > 0) {
        for (let val of req.session.cart) {
            if (val._id === item._id) {
                val.quantity++;
                return res.status(200).json(req.session.cart)
            }
        }
    } 
    item.quantity = 1;
    req.session.cart.push(item);
    return res.status(200).json(req.session.cart)
}

// const removeItem = (req, res) => {
//     const itemId = req.params.id;
//     const itemIdx = req.session.cart.findIndex(item => item._id === itemId)
//     req.session.cart.splice(itemIdx, 1);
//     res.status(200).json(req.session.cart)
// }

const removeItem = (req, res) => {
    let itemId = req.params.id;
    let foundItem = req.session.cart.find(val => val._id === itemId);
    if (foundItem) {
        if (foundItem.quantity > 1) {
            foundItem.quantity -= 1;
            res.status(200).json(req.session.cart);
        } else if (foundItem.quantity === 1) {
            let itemIdx = req.session.cart.indexOf(foundItem);
            foundItem =- 1;
            req.session.cart.splice(itemIdx, 1);
            res.status(200).json(req.session.cart)
        }
    }
}


module.exports = {
    addToCart,
    getCart,
    removeItem
}


// const addToCart = (req, res) => {
//     console.log(req.body)
//     let item = req.body;
//     if (req.session.cart.length > 0) {
//         for (let val of req.session.cart) {
//             if (val._id === item._id) {
//                 val.quantity++;
//                 res.status(200).json(req.session.cart)
//             } else {
//                 item.quantity = 1;
//                 req.session.cart.push(item);
//                 res.status(200).json(req.session.cart)
//             }
//         }
//     } else {
//         item.quantity = 1;
//         req.session.cart.push(item);
//         res.status(200).json(req.session.cart)
//     }
// }