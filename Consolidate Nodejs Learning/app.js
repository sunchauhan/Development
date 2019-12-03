var http = require('http');
var fs = require('fs');

// Server created using http module of Node.js
http.createServer(function(req, res) {
    
    if(req.url === '/home' || req.url === '/') {
        res.writeHead(200, { 'Content-Type' : 'text/html' } );
        res.end('<h1 style="color: red;">Welcome to the Homepage of HTTP server at 8080.</h1>');

    } else if (req.url === '/html') {
        res.writeHead(200, { 'Content-Type' : 'text/html' } );
        var readstream = fs.createReadStream(__dirname + '/htmlpage.html');
        readstream.pipe(res);

    } else {
        res.writeHead(200, { 'Content-Type' : 'text/html' } );
        var readstream = fs.createReadStream(__dirname + '/errorpage.html');
        readstream.pipe(res);
    }
    
}).listen(8080);

console.log('Http Server started at 8080.');

console.log('Initiating ExpressJs Server process at 8090.');

// Handling the server using express.js.
var express = require('express');
var bodyparser = require('body-parser');
var Promise = require('promise');
var mongoclient = require('mongodb').MongoClient;
const request = require('request');
var userAuthenticated = false;
//var Promise = new promise();

// MongoDB URL to connect with mongo server.
var mongoURL = 'mongodb://localhost:27017/';

// Function to insert document in concerned database and collection.
function mongoinsert(dbname, collectionname, dataobject) {
    mongoclient.connect(mongoURL, function(err, db) { 
        if(err) throw err;
        var dbo = db.db(dbname);
        dbo.collection(collectionname).insertOne(dataobject, function(err, data) { 
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        })
    });
}

// Function to perform find operation in concerned database and collection.
function mongofind(dbname, collectionname, dataobject, res) {
    mongoclient.connect(mongoURL, function(err, db) { 
        if(err) throw err;
        var dbo = db.db(dbname);
        dbo.collection(collectionname).find(dataobject).toArray(function(err, data) { 
            if (err) throw err;
            db.close();
            // res.send(JSON.stringify(data));
            res.render(__dirname + '/mongorecords.ejs', { data : data });
        })
    });
}

// For Decoding the Body of Http POST Request.
var urlencoder = bodyparser.urlencoded({extended : false});
var expressApp = express();

expressApp.set('view template', 'ejs');

// Middleware code for picking up static files.
expressApp.use('/form/:name', express.static(__dirname));
expressApp.use('/home/:name', express.static(__dirname));
expressApp.use('/submit', express.static(__dirname));

// Will gonna work for localhost:8090/test1/styles/external.css.
expressApp.use('/test1', express.static(__dirname));

// Will gonna work for localhost:8090/test1/external.css.
// expressApp.use('/test1', express.static(__dirname + '/styles'));
expressApp.use('/test2', express.static(__dirname));

// Will gonna work for localhost:8090/*.*
// expressApp.use(express.static(__dirname + '/styles'));
// <link rel="stylesheet" href="http://localhost:8090/external.css">

// Will gonna work for localhost:8090/styles/*.*
// expressApp.use(express.static(__dirname));
// <link rel="stylesheet" href="http://localhost:8090/styles/external.css">

// Will gonna work for localhost:8090/external.css
expressApp.use(express.static(__dirname + '/styles'));

expressApp.get('/', function(req, res) {
    renderloginPage(req, res);
});

expressApp.get('/login', function(req, res) {
    renderloginPage(req, res);
});

// First Handler for http request with url mapping.
expressApp.get('/home/:name', function(req, res) {
    if(!userAuthenticated) renderloginPage(req, res);
    else res.render(__dirname + '/welcomePage.ejs', { user : req.params.name });
});    

expressApp.get('/form/:name', function(req, res) {
    if(!userAuthenticated) renderloginPage(req, res);
    else res.render(__dirname + '/Form.ejs', { user : req.params.name });
});

expressApp.post('/submit', urlencoder, function(req, res) {
    if(!userAuthenticated) renderloginPage(req, res);
    else {
        mongoinsert('NodeJs', 'Random', req.body);
        res.render(__dirname + '/FormInput.ejs', {user : req.body});
    }
});

expressApp.get('/res', function(req, res) {
    //if(!userAuthenticated) renderloginPage(req, res);
    //else {
        //mongoinsert('NodeJs', 'Random', req.body);
        var result = response(req, res);
        console.log('Res' + res.body);
    //}
});

function response(req, res) {
    res.end("<a>Hello<a>");
};

// Http post request handler for user login.
expressApp.post('/submitlogin', urlencoder, function(req, res) {

    if(req.body.uname === null || req.body.psw === null)
        res.send('Entered credentails are incorrect.' + 
        '<br> <a style = "color:red;" href="http://localhost:8090/login"> Back to Login Page </a>');

    mongoclient.connect(mongoURL, function(err, db) { 
        if(err) throw err;
        var dbo = db.db('NodeJs');
        var query = {};
        query.uname = req.body.uname;
        query.psw = req.body.psw; 

        dbo.collection('auth_table').findOne(query, function(err, data) { 
            if (err) throw err;
            db.close();
            if(data === null || data.length === 0) {
                res.send('Entered credentails are incorrect.' + 
                '<br> <a style = "color:red;" href="http://localhost:8090/login"> Back to Login Page </a>');
            } else {
                
                userAuthenticated = true;
                res.render(__dirname + '/welcomePage.ejs', { user : 'User' });

               // request.get('http://localhost:8090/home/User').on('response', function(response) {
               //     console.log('Server responded.');
               // })
            }
        })
    });
});

expressApp.get('/test1', function(req, res) {
    if(!userAuthenticated) renderloginPage(req, res);
    else res.render(__dirname + '/test1.ejs');
});

expressApp.get('/test2', function(req, res) {

    if(!userAuthenticated) renderloginPage(req, res);
    else res.render(__dirname + '/test2.ejs');
});

expressApp.get('/dbrecords', function(req, res) {

    // First will gonna make connection with db,
    // and then will perform a findall query.
    // once result is available,
    // we can render the for the http request. 
    if(!userAuthenticated) renderloginPage(req, res);
    else mongofind('NodeJs', 'Random', {}, res); 
});

function renderloginPage(req, res) {
    res.sendFile(__dirname + '/loginPage.html');
}

expressApp.listen(8090);
console.log('ExpressJs Server started at 8090.');