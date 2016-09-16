function args2arr(args) {
  return [].slice.call(args);
}
function makeThunk(fn) {
  var args = args2arr(arguments).slice(1); //   collect remaining args
  return function () { //                       return function that runs fn(args...)
    args = args.concat(args2arr(arguments)); // BUT allows additional trailing args
    return fn.apply(null, args); //             apply all args to original fn
  };
}
function async(num, cb) {
  var val = Math.floor(num * Math.random());
  if (cb && ++val) { // has callback
    val += ' Robert ' + (val === 25 ? 'is happy' : 'has no google');
    setTimeout(makeThunk(cb, val), num * 10)
  } else {
    return val + ' (must return undone)'; // cannot callback
  }
}
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function test1() {
  function add(a, b) {
    var c = a + b;
    return async(c); // what if this line runs 1-3 seconds later?
  }

  var thunk = makeThunk(add, 10, 15);
  console.log(thunk());
}

function test2() {
  function add(a, b) {
    var c = a + b;
    return async(c); // what if this was async (had a callback)??
  }

  var thunk = function (cb) {
    cb(add(10, 15));
  };
  thunk(console.log);
}

function test3() {
  function add(a, b, cb) {
    var c = a + b;
    cb(async(c)); // we have callback, so what about async???
  }

  var thunk = makeThunk(add, 10, 15);
  thunk(console.log);
}

function test4() {
  function add(a, b, cb) {
    var c = a + b;
    async(c, cb); // this is async
  }

  var thunk = makeThunk(add, 10);
  var again = makeThunk(thunk, 15);
  var yawwn = makeThunk(again, console.log);
  var wrapa = makeThunk(yawwn);
  wrapa();
}

test1(), test2(), test3(), test4();
