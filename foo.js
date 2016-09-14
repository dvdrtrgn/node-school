var util = {
  log1thing: function (x) {
    console.log(x);
  },
  makeThunk: function (fn) {
    var args = [].slice.call(arguments, 1);
    return function (cb) {
      return fn.apply(null, args.concat(cb));
    };
  },
};

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function test1() {
  function add(a, b) {
    var c = a + b;
    return c; // what if this line runs 1-3 seconds later?
  }

  function thunk() {
    return add(10, 15);
  }
  console.log(thunk());
}

function test2() {
  function add(a, b) {
    var c = a + b;
    return c; // what if this was async??
  }

  function thunk(cb) {
    cb(add(10, 15));
  }
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

  var thunk = util.makeThunk(add, 10, 15);
  thunk(util.log1thing);
}

test1(), test2(), test3(), test4();
