var util = (function () {
  function arg2arr(args) {
    return [].slice.call(args);
  }
  return {
    log1thing: function (any) {
      console.log(any);
    },
    makeThunk: function (fn) {
      var args = arg2arr(arguments).slice(1); // collect remaining args
      return function () { // return function that runs fn with those args
        args = args.concat(arg2arr(arguments)); // BUT allows new args
        return fn.apply(null, args); // apply all args to original fn
      };
    },
  };
}());

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function test1() {
  function add(a, b) {
    var c = a + b;
    return c; // what if this line runs 1-3 seconds later?
  }

  var thunk = util.makeThunk(add, 10, 15);
  console.log(thunk());
}

function test2() {
  function add(a, b) {
    var c = a + b;
    return c; // what if this was async??
  }

  var thunk = function (cb) {
    cb(add(10, 15));
  };
  thunk(util.log1thing);
}

function test3() {
  function add(a, b, cb) {
    var c = a + b;
    cb(c); // what about async???
  }

  var thunk = util.makeThunk(add, 10, 15);
  thunk(util.log1thing);
}

function test4() {
  function add(a, b, cb) {
    setTimeout(
      function () { cb(a + b); }, 2222  // this is async
    );
  }

  var thunk = util.makeThunk(add, 10);
  var again = util.makeThunk(thunk, 15);
  var yawwn = util.makeThunk(again, util.log1thing);
  yawwn();
}

test1(), test2(), test3(), test4();
