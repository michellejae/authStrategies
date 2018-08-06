const passport = require(`passport`);
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const CONFIG = require(`../config/config.json`)


passport.use(new googleStrategy({
  //options for google strategies
  callbackURL: '/auth/google/redirect',
  clientID: CONFIG.auth1.clientID,
  clientSecret: CONFIG.auth1.clientSecret
}, () => {
  //passport callback function
})
)