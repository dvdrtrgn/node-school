/*
Write a program that uses a single asynchronous filesystem operation
to read a file and print the number of newlines it contains
...similar to running `cat file | wc -l`.
*/

const CLI = process.argv.slice(2);
const fs = require('fs');

(function (args) {
  var rez;

  function logNewLines(err, data) {
    if (err) {
      return console.error(err);
    }
    rez = data.split('\n').length - 1;
    console.log(rez);
  }

  fs.readFile(args[0], 'utf8', logNewLines);

}(CLI));
