const express = require(`express`);
const passport = require(`passport`);
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const path = require(`path`);
const handlebars = require(`express-handlebars`);
const bodyParser = require(`body-parser`)
const methodOverride = require(`method-override`);
const mongoose = require(`mongoose`);
const CONFIG = require(`./config/config.js`);

const app = express();
app.engine(`.hbs`, handlebars({defaultLayout: `main`, extname: `hbs`}))
app.set(`view engine`, `.hbs`);
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, '/public')));


const PORT = process.env.PORT || 4040;


const authRoute = require(`./routes/index.js`);
const passportSetup = require(`./helpers/passport`);

//app.use(bodyParser.urlencoded({ extended: true}));


mongoose.connect(CONFIG.mongodb.dbURI, { useNewUrlParser: true }).then( 
  () => {
  console.log('connected to mongo')
  }
).catch((err) => {
  console.log(err)
  console.log('connection to database failed')
})


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