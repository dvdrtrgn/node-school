/*
Write a program that uses a single synchronous filesystem operation
to read a file and print the number of newlines it contains
...similar to running `cat file | wc -l`.
*/

const CLI = process.argv.slice(2);
const fs = require('fs');

(function (args) {
  var rez;

  rez = fs.readFileSync(args[0], 'utf8');
  rez = rez.split('\n').length - 1;

  console.log(rez);

}(CLI));
