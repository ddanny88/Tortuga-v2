const { Address } = require('../../db/models/address_model');


const addAddress = async (req, res) => {
   try {
    const address = await new Address(req.body);
    const saveAddress = await address.save();
    // console.log(req.session)
    req.session.user.address = address;
    res.status(200).json(req.session.user)
   } catch (e) {
    console.log(e)
    res.json({error: 'ADDRESS ERROR'});
   }
}


module.exports = {
    addAddress
}