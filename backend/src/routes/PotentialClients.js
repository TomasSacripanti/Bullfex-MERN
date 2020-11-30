const {Router} = require('express');
const router = Router();
const {addPotentialClient ,getPotentialClients} = require('../controllers/PotentialClientController');

router.route('/')
    .get(getPotentialClients)
    .post(addPotentialClient)


module.exports = router;