/*
These four things are the contract that your module must follow.
 » Export a single function that takes exactly the arguments described.
 » Call the callback exactly once with an error or some data as described.
 » Don't change anything else, like global variables or stdout.
 » Handle all the errors that may occur and pass them to the callback.

The benefit is that it may be used by anyone who expects this contract.
*/

const fs = require('fs');
const path = require('path');

module.exports = function (dir, ext, cb) {
  function callback (err, arr) {
    if (err) {
      return cb(err);
    }
    rez = arr.filter(function (e) {
      return path.extname(e) === ('.' + ext);
    });

    cb(0, rez);
  }
  fs.readdir(dir, callback);
}
