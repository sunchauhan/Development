var request = require('request');
const fetch = require("node-fetch");

async function async1() {
    // for(var i = 0 ; i < 10000000; i++) {
    //     if (i==999999) console.log('Quitting Loop 1 for async 1');
    // }
    
    // var res3 = await setTimeout(function() { console.log('Quitting Loop 2 for async 1');
    // } , 30000);

    //var result = await request('http://localhost:8099/');
    //var response = await 
    console.log('entered');
    var response = await fetch('https://jsonplaceholder.typicode.com/posts/1');    
    console.log(await response.json()); 

    console.log('Quitting loop 1');
//    request.get('https://www.google.co.in/').then(function(data) { console.log('Response received from google. '); });

    // console.log(res3._idleTimeout);

    // var res2 = await setTimeout(function() { console.log('Quitting Loop 3 for async 1');
    // }, 30000);
    
    // console.log(res2._idleTimeout);

    // console.log('Quitting async1 function.');
}

function async2() { console.log('Qutting async 2'); }

function normal() {  console.log('normal function.'); }


async1();
async2();
normal();
