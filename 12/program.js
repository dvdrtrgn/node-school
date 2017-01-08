/*
Write an HTTP server that receives POST requests and returns upper-case.
Your server should listen on the port provided by the first argument.
*/

const CLI = process.argv.slice(2);
const http = require('http');

(function (args) {
  var port = Number(args[0] || 9999);

  function listener(req, res) {
    if (req.method !== 'POST') {
      return res.end();
    }
    req.on('data', function (data) {
      res.write(data.toString().toUpperCase());
    }).on('end', res.end);
  }

  http.createServer(listener).listen(port);

}(CLI));
