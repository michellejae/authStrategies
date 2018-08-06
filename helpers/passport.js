const passport = require(`passport`);
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const CONFIG = require(`../config/config.js`)


passport.use(new googleStrategy({
  //options for google strategies
  callbackURL: '/auth/google/redirect',
  clientID: CONFIG.auth1.clientID,
  clientSecret: CONFIG.auth1.clientSECRET
}, (accessToken, refreshToken, profile, done) => {
    //passport callback function
  User.findOrCreate({ googleId: profile.id }, function (err, user) {
    return done(err, user);
  });
})
)