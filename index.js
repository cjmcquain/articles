const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/articles/add', (req, res) => {
    res.render('articles/add');
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});