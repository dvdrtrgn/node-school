/*
Write a program that makes HTTP GET requests to a URL provided as argument.
Log the String contents of each "data" event from the response to a new line.
*/

const CLI = process.argv.slice(2);
const http = require('http');

(function (args) {
  var url = args[0];

  function logData(response) {
    response.setEncoding('utf8')
      .on('data', console.log)
      .on('error', console.error);
  }

  http.get(url, logData)
    .on('error', console.error);

}(CLI));
