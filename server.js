const express = require('express');
var serveStatic = require('serve-static');
var app = express();
var port = process.env.PORT || 8080; // set the port

app.use(serveStatic(__dirname + '/dist'));
app.use(serveStatic(__dirname + '/static'));
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
});

app.get('/about', function (req, res) {
  res.render('about', { title: 'Express' });
});

app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port);