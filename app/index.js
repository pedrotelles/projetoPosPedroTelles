const {host, port} = require('./config.js')
const express = require('express')
const bodyParser = require('body-parser')
const PouchDB = require('pouchdb');
//setup
const app = express()
app.use(bodyParser.json())
app.use(express.static('public'))


//Subscriber API
//app.use('/api/subscribers', require('./subscriberApi'))
// app.use('/api/products', require('./productsApi'))
app.use('/api/bd', require("./bdAPI"))
//sever startup

app.listen(port, () => {
    console.log(`Server started at http://${host}:${port}`)
})