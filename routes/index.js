const express = require(`express`);
const passport = require(`passport`);
const mongoose = require(`mongoose`);
const CONFIG = require(`../config/config.js`)


const router = express.Router();

// const router = require(`express`).Router();


router.get('/login', (req, res) => {
  res.render('./templates/login.hbs')
})

router.get('/logout', (req, res) => {
  req.logout()
  res.render('./templates/logout.hbs')
})

router.get('/google', passport.authenticate('google', {
  scope:['profile']
}))

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.redirect('/auth/profiles')
})

router.get('/profiles', isAuthenticated, (req, res) => {
  res.render('./templates/profiles.hbs')
})

function isAuthenticated (req, res, next) {
  if(req.isAuthenticated()) { next();}
  else { res.redirect('/'); }
}


module.exports = router;