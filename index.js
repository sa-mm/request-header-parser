var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));
app.enable('trust proxy')

app.get('/', function(req, res) {
    // var ip = req.ip.replace(/[A-z:]+/g,'');
    // var ips = req.ips;
    // console.log(ips);
    var ip = req.ip;
    var lang = req.acceptsLanguages()[0];
    var userAgentString = req.headers['user-agent'];
    var re = /(\(.*?\))/;
    var operatingSystem= userAgentString.match(re)[0].replace(/[\(\)]/g,'');
    var response = {
        "ipaddress": ip,
        "language": lang,
        "software": operatingSystem
    }
    // console.log(response);

    res.send(response);
});

app.listen(app.get('port'), function() {
    console.log('Request Header Parser Microservice listening on port ' + app.get('port'));
})