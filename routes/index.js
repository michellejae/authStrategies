const express = require(`express`);
const passport = require(`passport`);


const router = express.Router();

// const router = require(`express`).Router();


router.get('/login', (req, res) => {
  res.render('./templates/login.hbs')
})

router.get('/logout', (req, res) => {
  //handle with passport
  res.send('logging out')
})

router.get('/google', passport.authenticate('google', {
  scope:['profile']
}))

router.get('/google/redirect', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) =>{
  res.redirect('/')
})




module.exports = router;