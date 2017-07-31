const express = require('express')
const bodyParser = require('body-parser');
const soas2 = require('simple-oauth2-server');

const router = express.Router();
var session = require('express-session'), RedisStore = require('connect-redis')(session);
 
var sessionStore = new RedisStore({
    host : HOST, //ex: localhost
    port : 6379,
    ttl : (60000 * 24 * 30),
    pass : 'test' //senha configurada no servidor Redis
});
 
app.use(session({
    resave: false, //não salve a sessão se ela não for modificada
    saveUninitialized: false, //não crie sessão até alguma informação ser armazenada
    name : COOKIE_NAME,
    secret: COOKIE_PASS,
    store : sessionStore,
    cookie : {maxAge : (60000 * 24 * 30)}
}));
router.post('/login/', function(req, res, next){
  db.pool.getConnection(function(err, conn){
    var user = new userModel(conn);
    user.email = req.body.UserEmail;
    user.password = req.body.UserPassword;
 
    user.login(function(err, user){
      conn.release();
 
      var success = typeof err === 'undefined' || err === null;
 
      if (success){
        req.session.user = user;
        req.session.isLogged = true;
 
        res.redirect('/admin/');
      }
      else{
        res.redirect('/login/');
      }
    })
  });
})