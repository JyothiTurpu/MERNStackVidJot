const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use((req, res, next) => {
  console.log(Date.now());
  req.name = 'Varun'
  next();
});


app.get('/', (req, res) => {
  console.log(req.name);
  const title = 'Welcome Varun';
  res.render('index', {
    title
  });
});

app.get('/about', (req, res) => {
  res.render('about');
})

const port = 5000;

app.listen(port, () => {
  console.log(`Server Started on Port ${port}`); 
})