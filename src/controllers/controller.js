
exports.renderCasinoIndex = (req, res) => {
    res.render('index')
}

exports.renderCasinoRandom = (req, res) => {
    res.render('random')
}

exports.renderCasinoTragamonedas = (req, res) => {
    res.render('tragamonedas')
}

exports.renderCasinoTragamonedasV2 = (req, res) => {
    res.render('tragamonedas_sp')
}

exports.renderNewKeno = (req, res) => {
    res.render('keno')
}
// Keno sin oraculo
exports.renderNewKenoV2 = (req, res) => {
    res.render('keno_v2')
}
exports.renderNewRuleta = (req, res) => {
    res.render('ruleta_new')
}

exports.renderNewRuletaV2 = (req, res) => {
    res.render('ruleta_new_sin_oraculo')
}

