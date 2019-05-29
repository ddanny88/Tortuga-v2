const { Address } = require('../../db/models/address_model');


const addAddress = async (req, res) => {
   try {
    const address = await new Address(req.body);
    const saveAddress = await address.save();
    req.session.address = address
    res.status(200).json(req.session.address)
   } catch (e) {
    res.json({error: 'PLEASE ENTER VALID ADDRESS'});
   }
}


module.exports = {
    addAddress
}