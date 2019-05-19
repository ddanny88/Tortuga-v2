const checkUser = (req, res, next) => {
    if (!req.session.user) {
        res.status(401).jon({error: 'PLEASE LOG IN'})
    } 
    next();
}

const checkCart = (req, res, next) => {
    if (!req.session.cart) {
        req.session.cart = [];
    }
    next();
}


module.exports = {
    checkCart,
    checkUser
}