(function (args) {
  var mod = module.require('./module');
  console.log(mod, args);
}(process.argv.slice(1)));
