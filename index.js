/* eslint-env node */

const AppServer = require("./lib/AppServer.js");

var formidable = require('formidable');
var mv = require('mv');
var server;

/**
 * Starts webserver to serve files from "/app" folder
 */
function init() {
  // Access command line parameters from start command (see package.json)
  let appDirectory = process.argv[2], // folder with client files
    appPort = process.argv[3]; // port to use for serving static files
  server = new AppServer(appDirectory);
  server.start(appPort);
  server.app.post("/file-upload", function(req, res) {
    console.log("received");
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = __dirname + '/uploads/' + files.filetoupload.name;
      mv(oldpath, newpath, function(err) {
        if (err) {
          console.log(err);
        }
      })
      res.write('File uploaded and moved!');
      res.end();
    });
  });
}

init();
