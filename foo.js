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
  thunk(function (x) {
    console.log(x);
  });
}

function test3() {
  function add(a, b, cb) {
    var c = a + b;
    cb(c); // what about async???
  }

  function thunk(cb) {
    add(10, 15, cb);
  }
  thunk(function (x) {
    console.log(x);
  });
}

function test4() {
  function add(a, b, cb) {
    setTimeout(
      function () { cb(a + b); }, 2222  // this is async
    );
  }

  function thunk(cb) {
    add(10, 15, cb);
  }
  thunk(function (x) {
    console.log(x);
  });
}

test1(), test2(), test3(), test4();
