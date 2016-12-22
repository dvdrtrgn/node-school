/*
This problem is based on the previous program (HTTP COLLECT)
Write one that makes HTTP GET requests to the URLs provided as arguments.

You must log the complete content provided to you by each of the URLs.
You don't need to print out the length, just the data; one line per URL.
The catch is that you must print them out in the same order as provided.
*/

const CLI = process.argv.slice(2);
const http = require('http');
const bl = require('bl');

(function (args) {
  var rez = Array(args.length).fill();

  function tryLogAll(str, i) {
    rez[i] = str;
    if (rez.every(truthy => truthy)) {
      console.log(rez.join('\n'));
    }
  }

  function makeDataLogger(idx) {
    return function (err, data) {
      if (err) {
        return console.error(err);
      }
      tryLogAll(data, idx);
    }
  }

  function collectData(response, i) {
    response.setEncoding('utf8')
      .pipe(bl(makeDataLogger(i)));
  }

  args.forEach(function (e, i) {
    http.get(e, res => collectData(res, i))
      .on('error', console.error);
  });

}(CLI));
