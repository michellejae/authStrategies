const passport = require(`passport`);
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const CONFIG = require(`../config/config.js`);
const User = require(`../models/user-model`);


passport.use(new googleStrategy({
  //options for google strategies
  callbackURL: '/auth/google/redirect',
  clientID: CONFIG.auth1.clientID,
  clientSecret: CONFIG.auth1.clientSECRET
}, (accessToken, refreshToken, profile, done) => {

  User.findOne({googleId: profile.id}).then((currentUser) => {
    if(currentUser){
      console.log(`new is ${currentUser}`)
    } else {
      new User({
        username: profile.displayName,
        googleId: profile.id
      }).save().then((newUser) => {
        console.log(`new user created ${newUser}`)
      });
    }
  });
})
)