// const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripeSecretKey = "sk_test_Ol9k4QHNkmuQaSXe8xh3kLoH00vIgnb3U3";
const stripe = require('stripe')(stripeSecretKey);



const takePayment = async (req, res) => {
    const token = req.body.token;
    console.log(token)
    // const charge = stripe.charges.create({
    //     amount:
    //     currency
    //     description:
    //     source:
    // })
}

module.exports = {
    takePayment
}