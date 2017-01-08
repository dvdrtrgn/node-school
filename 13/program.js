/*
Write an HTTP server that serves JSON data when it receives a GET request api endpoints.
Expect the request to contain a query with a key 'iso' and an ISO-format time.
'/api/parsetime?iso=2013-08-10T12:10:15.474Z' => { "hour": 14, "minute": 23, "second": 15 }
 '/api/unixtime?iso=2013-08-10T12:10:15.474Z' => { "unixtime": 1376136615474 }
Your server should listen on the port provided by the first argument.
*/

const CLI = process.argv.slice(2);
const http = require('http');
const url = require('url');

(function (args) {
  var port = Number(args[0] || 9999);

  function parseEndpoint(str) {
    var data = url.parse(str, true);
    var time = new Date(data.query.iso);

    if (data.pathname === '/api/parsetime') return {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds(),
    };
    if (data.pathname === '/api/unixtime') return {
      unixtime: time.getTime(),
    };
  }

  function listener(req, res) {
    res.writeHead(200, JSON.parse('{"Content-Type":"application/json"}'));
    res.end(JSON.stringify(parseEndpoint(req.url)));
  }

  http.createServer(listener).listen(port);

}(CLI));
