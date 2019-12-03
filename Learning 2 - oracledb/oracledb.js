// var oracledb = require('oracledb');

// var config = {
//     user: "system", 
//     password: "Database",
//     connectString: 'localhost:1521/orcl.us.deloitte.com'
// };

// oracledb.getConnection(config, function(err, connection) {
//     if(err) {
//         console.log(err);
//     }
//     connection.execute('select * from DANE_ONENDS_ORDERS', [], (err, res) => {
//         console.log(JSON.stringify(res));
//     });
// });

async function a() {
    // return new Promise((resolve, reject) => {
    //     resolve(1);

    // });
    return 1;
}

async function main() {
    return await a();
}

console.log(a());

console.log(main());

function hello() {

}

// main().then((res) => {
//     console.log(res);
// });

// console.log(a().then(() => {
//     console.log('In then');
// }));
