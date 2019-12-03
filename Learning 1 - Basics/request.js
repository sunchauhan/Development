var request = require('request');
var req_promise = require('request-promise');

request.get('http://localhost:8090/res', function(err, response, body) {
    console.log("Response: " + response.body);
});

req_promise.get('http://localhost:8090/res').then((response) => {
    console.log("Response 2: " + response);
});