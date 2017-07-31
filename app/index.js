const {host, port} = require('./config.js')
const express = require('express')
const bodyParser = require('body-parser');


const router = express.Router();

//setup
const app = express()
app.use(bodyParser.json());
app.use(express.static('public'));

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'example.com');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}
app.use(allowCrossDomain)
app.use('/api/bd', require("./bdAPI"));
//sever startup

app.listen(port, () => {
    console.log(`Server started at http://${host}:${port}`)
})