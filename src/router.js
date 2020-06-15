express = require('express')
const router =  express.Router();
const controller = require('./controllers/controller')
router.get('/', function(req, res) {
    res.send('Hola Mundo!');
});

router.get('/contract', controller.renderCasinoIndex );

router.get('/random', controller.renderCasinoRandom );

router.get('/tragamonedas', controller.renderCasinoTragamonedas);

router.get('/keno', controller.renderNewKeno);

router.get('/ruleta', controller.renderNewRuleta);


module.exports = router