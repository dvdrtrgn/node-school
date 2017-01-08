/*
Write a TCP time server that listens to the port in the first argument.
For each connection write the current in the format: "YYYY-MM-DD hh:mm"
...output is followed by a newline character. And close the connection.
*/

const CLI = process.argv.slice(2);
const net = require('net');

(function (args) {
  var port = Number(args[0] || 9999);

  function genDateString(date = new Date()) {
    let pad2 = num => (`00${num}`).match(/\d\d$/)[0];
    var now = [
      date.getFullYear(),
      pad2(date.getMonth() + 1),
      pad2(date.getDate()),
      pad2(date.getHours()),
      pad2(date.getMinutes()),
    ];
    return `${now[0]}-${now[1]}-${now[2]} ${now[3]}:${now[4]}`;
  }

  net.createServer(function (socket) {
    socket.end(`${genDateString()}\n`);
  }).listen(port);

}(CLI));
