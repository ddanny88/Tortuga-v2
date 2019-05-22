function getItemTotal(item) {
    return function() {
        return this.price * this.quantity;
    }.bind(item);
}

function calcTax(subtotal) {
    let tax = subtotal * 0.0825;
    return (subtotal + tax).toFixed(2);
}

// function composeTotal(req, res) {
//     return function(a, b) {
//         return function(cart) {
//             return b(a(cart))
//         }
//     }
// }

const grandSubTotal = (req, res) => {
    let subTotal = req.session.cart.map(item => getItemTotal(item)()).reduce((acc, el) => acc + el);
    req.session.cart.subtotal = subTotal
    console.log(req.session.cart.subtotal)
    res.status(200).json(req.session.cart.subtotal);
}

const addToCart = (req, res) => {
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

const getCart = (req, res) => {
    res.status(200).json(req.session.cart);
}


module.exports = {
    addToCart,
    getCart,
    removeItem,
    grandSubTotal
}


