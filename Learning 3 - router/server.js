var express = require('express');
var app = express();
var router = require('./router');
var router2 = require('./router 2');

app.use('/api', router);
app.use('/api2', router2);

app.listen(8090);

