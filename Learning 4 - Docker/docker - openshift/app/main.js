const express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send("Hello link is up and running.");
});

app.listen(3000, () => {
    console.log("My Application is up & running.");
});
