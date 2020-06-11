const path      = require('path')
const express    = require('express');
const router = require('./router')
const port = 3000;

app = express();

app.use(express.static(process.cwd() + '/node_modules/web3/dist'));
app.use(express.static(process.cwd() + '/@truffle/contract/dist'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static("public"))
app.set("views","views")
app.set("view engine", "hbs")
app.use("/", router)

app.listen(port, function() {
    console.log(`Listening port ${port}`);
});