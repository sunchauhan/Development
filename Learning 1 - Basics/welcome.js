// Just a log message like in JS.
console.log("Hi, Node.js 2");

// Creating your PC as server and will enable port 8080
// if anyone hits the 8080 using http. it'll display welcome message.

// require function is used to include modules in you
// application.

var http = require('http');
var module = require('C:/Users/sunchauhan/Documents/NodeJS Learning/customModule.js');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {

    //create a file named mynewfile1.txt: with 'Hello content!' in it.
    fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
    });

   // fs.open('mynewfile1.txt', 'w', function (err, file) {
     //   if (err) throw err;
       // file.appendFile('OPen & Append');
       // file.
       // console.log('Openee & Appended!');
    //});

    res.writeHead(200, {'Content-Type': 'text/html'});
    // methods to play with the content of URL.
    var q = url.parse(req.url, true).query;
    var txt = q.name;
    res.write(txt);
    res.end('\n Hello World, new try!' + '\n' + module.getWelcomeMessage());
}).listen(8080);