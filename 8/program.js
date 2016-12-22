/*
Write a program that makes HTTP GET requests to a URL provided as argument.
Collect all data from the server (not just the first "data" event).
Log the number of characters, then the complete String of characters.

Use third-party bl (Buffer List) to abstract collecting an entire stream.
`npm install bl --save-dev`
*/

const CLI = process.argv.slice(2);
const http = require('http');
const bl = require('bl');

(function (args) {
  var url = args[0];

  function logLengthData(err, data) {
    if (err) {
      return console.error(err);
    }
    console.log(data.length + '\n' + data);
  }

  function collectData(response) {
    response.setEncoding('utf8')
      .pipe(bl(logLengthData));
  }

  http.get(url, collectData)
    .on('error', console.error);

}(CLI));
