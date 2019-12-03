var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'Sunil.Chauhan0409@gmail.com',
    pass: '$cogni0409'
  }
});

var mailOptions = {
  from: 'Sunil.Chauhan0409@gmail.com',
  to: 'sunilchauhan00123@hotmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

function sendTheMail() {
	

}
 
console.log("Mail Transfer Code Executed.");