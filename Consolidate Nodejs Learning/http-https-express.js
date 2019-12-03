var express = require('express'),
    routes = require('./routes'),
    upload = require('./routes/upload'),
    http = require('http'),
    https = require('https'),
    fs = require('fs'),
    path = require('path'),
    httpApp = express(),
    app = express(),
    certPath = "cert";

// Think setting options for SSL impl for https request.

// You need to buy SSL certificate for using it.
// we need to get this to form a certificate and private key 
// for secure connection. 

var httpsOptions = {
    key: fs.readFileSync(path.join(certPath, "ssl.key")),
    cert: fs.readFileSync(path.join(certPath, "ssl.crt"))
};

// trying to configure express application.
httpApp.set('port', process.env.PORT || 80);
httpApp.get("*", function (req, res, next) {
    res.redirect("https://" + req.headers.host + "/" + req.path);
});

// Simple configuration, like setting up views, ports, static files middleware.
// all environments
app.set('port', process.env.PORT || 443);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.enable('trust proxy');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', routes.index);
app.post('/upload', upload.s3);

// creating http server with express config at mentioned port.
http.createServer(httpApp).listen(httpApp.get('port'), function() {
    console.log('Express HTTP server listening on port ' + httpApp.get('port'));
});

// creating https server with https ssl config and with express config.
https.createServer(httpsOptions, app).listen(app.get('port'), function() {
    console.log('Express HTTPS server listening on port ' + app.get('port'));
});