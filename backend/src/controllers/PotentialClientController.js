const clientCtrl = {};
const Prospect = require('../models/PotentialClient');

clientCtrl.getPotentialClients = async (req, res) => {
    const clients = await Prospect.find();
    res.json(clients);
}

clientCtrl.addPotentialClient = async (req, res) => {
    const { name, email, phone, website, comment } = req.body;
    const newProspect = new Prospect({
        name,
        email,
        phone,
        website,
        comment,
    });
    await newProspect.save();
    res.json('Saved New Prospect');
}


module.exports = clientCtrl;