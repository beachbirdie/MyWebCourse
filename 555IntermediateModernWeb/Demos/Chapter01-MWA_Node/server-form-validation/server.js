var express = require('express');
var app = express(); var app = express();
var path = require('path');
var serveStatic = require('serve-static');
var finalhandler = require('finalhandler');
var favicon = require('serve-favicon');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

var serve = serveStatic('public/ftp', { 'index': ['index.html', 'index.htm'] })

app.use(express.static('public'))

app.get('/search', function (req, res) {
    setTimeout(() => {
        res.sendFile('results.html');
    }, 3000);
});

app.post('/register', function (req, res) {
    console.log('in the log');
    res.sendFile('public/registerform.html');
});

app.get(/^(.+)$/, function (req, res) { res.sendfile('public/' + req.params[0]); });

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
    console.log('http://localhost:3000');
});