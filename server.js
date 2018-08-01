const express = require(`express`);

const app = express();


const PORT = process.env.PORT || 4040;

// app.get(`/`, (req, res) => {
// res.send(`smoke test`)
// })


app.get('/*', (req, res)=>{
  let options = {
    root: __dirname + '/public'
  };
  res.sendFile('index.html', options);
})




app.listen(PORT, (err) => {
  console.log(`Server be runnin' runnin' on ${PORT}`)
})