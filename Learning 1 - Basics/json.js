var http = require('http');

http.createServer(function(req, res) { 
    res.writeHead(200, {'Content-Type' : 'application/json'});
    var object = { id : 1, name : 'Deloitte', client : 'USSC' };
    res.end(JSON.stringify(object));
    console.log('Response prepared.');
}).listen(8080);

console.log('Server started at 8080');