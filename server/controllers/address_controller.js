const { Address } = require('../../db/models/address_model');


const addAddress = async (req, res) => {
   try {
    const address = await new Address(req.body);
    const saveAddress = await address.save();
    req.session.address = address
    console.log(req.session)
    res.status(200).json(req.session.address)
   } catch (e) {
    console.log(e)
    res.json({error: 'ADDRESS ERROR'});
   }
}


module.exports = {
    addAddress
}