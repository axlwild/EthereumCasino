express = require('express')
const router =  express.Router();
const controller = require('./controllers/controller')
router.get('/', function(req, res) {
    res.send('Hola Mundo!');
});

router.get('/contract', controller.renderCasinoIndex );


module.exports = router