// Approach 1
const bcrypt = require('bcrypt');
var myPlaintextPassword = "Sunil Chauhan";
var saltRounds = 10;

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    console.log(hash);
    bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
        console.log(res);
    });
});

// Approach 2
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');

const encryptedString = cryptr.encrypt('bacon');
const decryptedString = cryptr.decrypt(encryptedString);

console.log('Encrypted: ' + encryptedString);
console.log('Decrypted: ' + decryptedString);