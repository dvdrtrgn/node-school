/*
Write an HTTP server that serves the same text file for each request.
Your server should listen on the port provided by the first argument.
You will be provided with the path to serve as the second argument.
Use the fs.createReadStream() method to stream the file to response.
*/

const CLI = process.argv.slice(2);
const http = require('http');
const fs = require('fs');

(function (args) {
  var port = Number(args[0] || 9999);
  var path = args[1];

  http.createServer(function (req, res) {
    fs.createReadStream(path).pipe(res);
  }).listen(port);

}(CLI));
