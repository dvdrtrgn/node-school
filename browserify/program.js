const CLI = process.argv.slice(2);
const gen = require('./genDateString');

(function (args) {

  console.log(`${gen()}\n`, `args: ${args}`);

}(CLI));
