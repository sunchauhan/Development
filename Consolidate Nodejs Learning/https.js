const https = require('https');
const fs = require('fs');

// I need to have a certificate file and a private key 
// to create https server, own a SSL (CA) or create one (Self signed).
// BAsically for authenication with server and trusted session.

// const options = {
//   key: fs.readFileSync('key.pem'),
//   cert: fs.readFileSync('cert.pem')
// };

// https.createServer(options, function (req, res) {
//   res.writeHead(200);
//   res.end("hello world\n");
// }).listen(8000);


function hello() {

    var index = 10;
    var index = 11;
    let i = 10;
    //let i = 11;

    if(true) {
        var condition = 'var';
        let con = 'let';
    }
    console.log(condition);
    var a=0;
}

hello();
