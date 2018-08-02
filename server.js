const express = require(`express`);
const passport = require(`passport`);
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const handlebars = require(`express-handlebars`);
const methodOverride = require(`method-override`);
const CONFIG = require(`./config/config.json`);

const app = express();
app.engine(`.hbs`, handlebars({defaultLayout: `main`, extname: `hbs`}))
app.set(`view engine`, `.hbs`);
//app.use(methodOverride('_method'));


const PORT = process.env.PORT || 4040;



passport.use(new googleStrategy({
  //options for google strategies
  callbackURL: '/auth/google/redirect',
  clientID: CONFIG.auth1.clientID,
  clientSecret: CONFIG.auth1.clientSecret
}, () => {
  //passport callback function
})
)

app.get(`/`, (req, res) => {
  res.render('home')
})


// app.get(`/`, (req, res) => {
// res.send(`smoke test`)
// })


// app.get('/*', (req, res)=>{
//   let options = {
//     root: __dirname + '/public'
//   };
//   res.sendFile('index.html', options);
// })




app.listen(PORT, (err) => {
  console.log(`Server be runnin' runnin' on ${PORT}`)
})