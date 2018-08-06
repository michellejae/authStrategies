const express = require(`express`);
const passport = require(`passport`);
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const path = require(`path`);
const handlebars = require(`express-handlebars`);
const bodyParser = require(`body-parser`)
const methodOverride = require(`method-override`);
const CONFIG = require(`./config/config.json`);

const app = express();
app.engine(`.hbs`, handlebars({defaultLayout: `main`, extname: `hbs`}))
app.set(`view engine`, `.hbs`);
//app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, '/public')));


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

const authRoute = require(`./routes/index.js`);

app.use(bodyParser.urlencoded({ extended: true}));
app.use(`/auth`, authRoute)


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