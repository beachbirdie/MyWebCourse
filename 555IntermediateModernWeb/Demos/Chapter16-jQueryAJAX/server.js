var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.listen(9015);
console.log('Listening on port 9015: http://localhost:9015');