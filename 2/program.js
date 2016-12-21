/*
Write a program that accepts one or more numbers as command-line arguments
and prints the sum of those numbers to the console (stdout).
*/

const CLI = process.argv.slice(2);

(function (args) {
  var rez;

  rez = args.map(Number).reduce(function (a, b) {
    return a + b;
  });
  console.log(rez);

}(CLI));
