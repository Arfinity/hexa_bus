var express = require('express');
var app = express();

var PORT = 3000;
var HOST = '0.0.0.0';

app.use(express.static('../public/dist/js/'));
app.use(express.static('../public/dist/css/'));
app.use(express.static('../public/dist/assets'));
app.use(express.static('./'));

app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
  res.render('index.html');
});

app.get('/intro', function(req, res) {
  res.render('intro.html');
});

console.log('Server is activated on '+HOST+':'+PORT);
app.listen(PORT, HOST);

