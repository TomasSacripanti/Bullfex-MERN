const potentialClientCtrl = {};
const PotentialClient = require('../models/PotentialClient');

potentialClientCtrl.getPotentialClients = async (req, res) => {
    const clients = await PotentialClient.find();
    res.json(clients);
}

potentialClientCtrl.addPotentialClient = async (req, res) => {
    const { name, email, phone, website, comment } = req.body;
    const newPotentialClient = new PotentialClient({
        name,
        email,
        phone,
        website,
        comment,
    });
    await newPotentialClient.save();
    res.json('Saved PotentialClient');
}


module.exports = potentialClientCtrl;