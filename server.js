const express = require(`express`);
const handlebars = require(`express-handlebars`);
const bodyParser = require(`body-parser`)
const methodOverride = require(`method-override`);

const app = express();
app.engine(`.hbs`, handlebars({defaultLayout: `main`, extname: `hbs`}))
app.set(`view engine`, `.hbs`);
//app.use(methodOverride('_method'));


const PORT = process.env.PORT || 4040;

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