express = require('express')
const router =  express.Router();
const controller = require('./controllers/controller')
router.get('/', controller.renderCasinoTragamonedas);

router.get('/contract', controller.renderCasinoIndex );

router.get('/random', controller.renderCasinoRandom );

router.get('/tragamonedas', controller.renderCasinoTragamonedas);

router.get('/keno', controller.renderNewKeno);

router.get('/ruleta', controller.renderNewRuleta);

router.get('/ruletasn', controller.renderNewRuletaV2);

router.get('/kenosn', controller.renderNewKenoV2);

router.get('/tragamonedassn', controller.renderCasinoTragamonedasV2);


module.exports = router