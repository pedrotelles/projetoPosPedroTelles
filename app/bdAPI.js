const express = require('express')
const PouchDB = require('pouchdb');
const router = express.Router();

var db = new PouchDB('http://localhost:5984/donaRita');
db.info().then(function (info) {
  console.log(info);
})
var doc = {
  "_id": "mittens",
  "name": "Mittens",
  "occupation": "kitten",
  "age": 3,
  "hobbies": [
    "playing with balls of yarn",
    "chasing laser pointers",
    "lookin' hella cute"
  ]
};
db.put(doc);
router.get('/', (request, response) => {

    console.log((db.get('mittens')));
});
module.exports = router;
