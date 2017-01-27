module.exports = function (date = new Date()) {
  let pad2 = num => (`00${num}`).match(/\d\d$/)[0];
  var now = [
    date.getFullYear(),
    pad2(date.getMonth() + 1),
    pad2(date.getDate()),
    pad2(date.getHours()),
    pad2(date.getMinutes()),
  ];
  return `${now[0]}-${now[1]}-${now[2]} ${now[3]}:${now[4]}`;
};
