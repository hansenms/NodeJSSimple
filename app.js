const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.write('This is a journey into sound....');
    res.end();
});

var port = process.env.PORT || 3000;

console.log('Listening on port ' + port);

app.listen(port);

