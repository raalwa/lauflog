/* eslint-env browser */

// var http = require('http');
// var formidable = require('formidable');
// var fs = require('fs');
//
// http.createServer(function (req, res) {
//   if (req.url == '/fileupload') {
//     var form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//       var oldpath = files.filetoupload.path;
//       var newpath = 'C:/Users/Your Name/' + files.filetoupload.name;
//       fs.rename(oldpath, newpath, function (err) {
//         if (err) throw err;
//         res.write('File uploaded and moved!');
//         res.end();
//       });
//  });
//   } else {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//     res.write('<input type="file" name="filetoupload"><br>');
//     res.write('<input type="submit">');
//     res.write('</form>');
//     return res.end();
//   }
// }).listen(8080);


// var express = require("express"),
//     app = express(),
//     http = require("http").Server(app).listen(80),
//     upload = require;
// app.get("/file-upload",function(req,res){
//   res.sendFile(__dirname+"/index.html");
// })
//
// app.post("/file-upload",function(req,res){
//   if(req.files){
//     var file = req.files.filename,
//     filename = file.name;
//     file.mv("./upload/"+filename,function(err){
//       if(err){
//         console.log(err)
//         res.send("error occured")
//       }
//       else{
//         res.send("Done")
//       }
//     })
//   }
// })
