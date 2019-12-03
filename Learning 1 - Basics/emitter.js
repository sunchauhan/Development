var events = require('events');
var util = require('util');

var Person = function(name) {
    this.name = name;
}

util.inherits(Person, events.EventEmitter);

var per1 = new Person("Sunil");
var per2 = new Person("Chauhan");
var per3 = new Person("Bittu_Chauhan");

var array = [per1, per2, per3];

array.forEach(function(element) {
    element.on('trigger', function(msg) {
        console.log("Hi, " + element.name);
    });
});

per2.emit('trigger');