/*
  Create a program that prints a directory list filtered by extension,
  provided a directory name and a file extension as arguments.
*/

const CLI = process.argv.slice(2);
const fs = require('fs');
const path = require('path');

(function (args) {
  var rez;
  let dir = args[0];
  let ext = '.' + args[1];

  function logMatchingFiles(err, list) {
    if (err) {
      return console.error(err);
    }
    rez = list.filter(function (e) {
      return (path.extname(e) === ext);
    }).join('\n');
    console.log(rez);
  }

  fs.readdir(dir, logMatchingFiles);

}(CLI));
