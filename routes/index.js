const express = require(`express`);

const router = express.Router();

// const router = require(`express`).Router();


router.get('/login', (req, res) => {
  res.render('./templates/login.hbs')
})

router.get('/logout', (req, res) => {
  //handle with passport
  res.send('logging out')
})

router.get('/google', (req, res) => {
  // login with google via passport
  res.send('loggin in with google')
})





module.exports = router;