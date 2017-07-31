const express = require('express');
const passport = require('passport');
const router = express.Router();

const env = {
  AUTH0_CLIENT_ID: 'gUwh6BbIKaYU9eMzo7TFWVADjNLpOH0H',
  AUTH0_DOMAIN: 'biscoitodonarita.auth0.com',
  AUTH0_CALLBACK_URL: 'http://localhost:8000/callback'
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

// Perform the login
router.get(
  '/login',
  passport.authenticate('auth0', {
    clientID: env.AUTH0_CLIENT_ID,
    domain: env.AUTH0_DOMAIN,
    redirectUri: env.AUTH0_CALLBACK_URL,
    audience: 'https://' + env.AUTH0_DOMAIN + '/userinfo',
    responseType: 'code',
    scope: 'openid'
  }),
  function(req, res) {
    res.redirect('/');
  }
);

// Perform session logout and redirect to homepage
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Perform the final stage of authentication and redirect to '/user'
router.get(
  '/callback',
  passport.authenticate('auth0', {
    failureRedirect: '/'
  }),
  function(req, res) {
    res.redirect(req.session.returnTo || '/user');
  }
);