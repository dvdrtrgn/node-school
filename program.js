(function (args) {
  var mod = require('./mod.js');
  var dir = args[0];
  var ext = args[1];

  mod(dir, ext, function (err, rez) {
    if (err) {
      console.log(err);
    }
    rez.forEach(function(e){ console.log(e) });
  });

}(process.argv.slice(2)));
