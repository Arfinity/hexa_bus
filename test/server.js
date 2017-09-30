var express = require('express');
var app = express();
var path = require('path');

var PORT = 3000;
var HOST = '0.0.0.0';

app.use(express.static('../public/'));
app.use(express.static('./'));

app.set('views', __dirname + '/../public/');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
  res.render('index.html');
});

app.get('/intro', function(req, res) {
  res.render('intro.html');
});

console.log('Server is activated on '+HOST+':'+PORT);
app.listen(PORT, HOST);

