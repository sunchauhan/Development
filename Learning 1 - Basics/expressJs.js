var express = require('express');

var app = express();

var bodyparser = require('body-parser');

var urlencoderparser = bodyparser.urlencoded({ extended : false});

// Taking care of static files using middleware 
// provided by expressJs.
// middle is code between request made and response sent.
// if request is made to /html, it will first load
// the required static file from the directory mentioned.
app.use('/html', express.static(__dirname));

// Using ejs for template, template allow you to fill
// dynamic content in your html page.
app.set('view template', 'ejs');

app.get('/home', function(req, res) {
    res.send('HomePage 1');
});

app.get('/', function(req, res) {
    res.send('HomePage 2');
});

// Post Request, using request body once decoded by the body-parser
// as we can't simply access the request body of post request.
app.post('/posting', urlencoderparser, function(req, res) {
    console.log('POST Request: ' + req.body.name + ' -- 2. ' + req.body.company);
    res.render(__dirname + '/post.ejs', { postbody : req.body } );
});

app.get('/html', function(req, res) {
    // how to fetch Query String from the URL.
    // req.query contains the object for params.
    console.log('Request Query: ' + req.query.name);
    res.sendFile(__dirname + '/htmlFile.html');
});

app.get('/partial/:name', function(req, res) {
    res.render(__dirname + '/template.ejs', { name : req.params.name});
});

app.listen(9080);

console.log('Server started at 9080.');