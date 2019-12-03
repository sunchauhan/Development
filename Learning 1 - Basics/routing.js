var http = require('http');
var fs = require('fs');

var httpServer = http.createServer(function(req, res) { 
    if(req.url === '/home' || req.url === '/') {

        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.write('Welcome HOME Fellas !!!...');
        res.end();

    } else if (req.url === '/html') {

        res.writeHead(200, {'Content-Type' : 'text/html'});
        var myReadStream = fs.createReadStream(__dirname + '/htmlPage 2.html');
        myReadStream.pipe(res);

    } else if (req.url === '/object') {

        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end(JSON.stringify({ id : 1, company : 'Deloitte', client : 'USSC' }));

    } else {
        
        res.writeHead(200, {'Content-Type' : 'text/html'});
        var myReadStream = fs.createReadStream(__dirname + '/404.html');
        myReadStream.pipe(res);
    }
    
});

httpServer.listen(8090);

console.log("Server started.");