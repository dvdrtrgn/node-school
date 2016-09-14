var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, cb) {
  fs.readdir(dir, function (err, arr) {
    if (err) {
      return cb(err);
    }
    var rez = arr.filter(function (e, i) {
      return (path.extname(e).slice(1) === ext);
    });

    cb('', rez);
  });

};
