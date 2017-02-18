var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.get('/', function(req, res) {
    res.send("HI");
});

app.listen(app.get('port'), function() {
    console.log('Request Header Parser Microservice listening on port ' + app.get('port'));
})