var express = require('express');
var cloudflare = require('cloudflare-express');
var app = express();

app.use(cloudflare.restore({update_on_start:true}));
app.set('port', (process.env.PORT || 3000));
app.enable('trust proxy');

app.get('/api/whoami/', function(req, res) {
    var ip = req.cf_ip;
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