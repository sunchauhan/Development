var http = require('http');
var fs = require('fs');

var httpServer = http.createServer(function(req, res) { 
    // res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.writeHead(200, {'Content-Type' : 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/htmlFile.html');
    myReadStream.pipe(res);
});

httpServer.listen(8090);

console.log("Server started.");

// Normal Read and write stream.
// var myReadStream = fs.createReadStream(__dirname + '/textFile.txt');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeFile.txt');

// myReadStream.pipe(myWriteStream);

// or // Basically two ways to send the data from buffer to destination.

// stream has inherited properties of events where data is the event for them.
// every time data is sensed by the stream, myReadSTream is triggered.

//myReadStream.on('data', function(chunk) {
//    myWriteStream.write(chunk);
//});