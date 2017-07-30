const express = require('express')
const low = require('lowdb');
const router = express.Router();
const db = low('db.json')
db.defaults({ posts: [], user: [],produtos:[] }).write()
db.get('posts')  
  .push({ id: 1, title: 'lowdb is awesome'})
  .write();
db.set('produtos',[{ id: 1, title: 'lowdb is awesome'}])

 
router.get('/', (request, response) => {

    response.json(

      db.get('posts')
        .find({ id: 1 })
        .value()

    );
});
module.exports = router;
