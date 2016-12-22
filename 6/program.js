/*
This problem is the same as the previous but introduces the concept of modules.
You must write a module to export a single function that takes three arguments:
...the directory name, the filename extension string and a callback function.

If you receive an error, the callback must be called with the error.
You must not print directly to the console from your module file.
*/

const CLI = process.argv.slice(2);
const mod = require('./module');

(function (args) {
  var rez;
  let dir = args[0];
  let ext = args[1];

  function logFiles(err, list) {
    if (err) {
      return console.log(err);
    }
    rez = list.join('\n');
    console.log(rez);
  }

  mod(dir, ext, logFiles);

}(CLI));
