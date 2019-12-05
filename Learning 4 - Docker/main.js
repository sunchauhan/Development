const http = require('http');

http.createServer(function(req, res) {
    res.end("Hello server started at 8090.");
}).listen(8090);