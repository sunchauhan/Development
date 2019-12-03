var oracledb = require('oracledb');

var config = {
 user: "system", 
 password: "Database",
 connectString: 'localhost:1521/orcl.us.deloitte.com'
};

oracledb.getConnection(config, function(err, connection) {
 if(err) {
	 console.log(err);
 }
 connection.execute('select * from DANE_ONENDS_ORDERS', [], (err, res) => {
	 console.log("Rows: "+ res.rows);
	 console.log("\n JSON: "+ res.rows[0][5]);
 });
});