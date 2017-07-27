const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.write('<h1>This is my basic web app...</h1>');
    res.write('<h3>This is where it gets really interesting!');
    res.end();
});

var port = process.env.PORT || 3000;

console.log('Listening on port ' + port);

app.listen(port);

