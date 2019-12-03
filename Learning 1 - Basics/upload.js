var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileuploadURL') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = 'C:/Users/sunchauhan/Documents/NodeJS Learning/' + files.filetoupload.name;
      //fs.rename(oldpath, newpath, function (err) {
        //if (err) throw err;
        //res.write('File uploaded and moved!');
        //res.end();
      //});
      res.write('File uploaded and saved at Temp Location.');  
      res.end();
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileuploadURL" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080); 

console.log("Server started.");