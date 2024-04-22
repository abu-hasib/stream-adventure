"use strict";

const { Readable } = require("node:stream");

class MyStream extends Readable {
  _read(size) {}
}

const strm = new MyStream();
strm.push(process.argv[2]);
strm.pipe(process.stdout);
strm.push(null);

strm.on("data", function (data) {
  // strm.push(data)
  // console.log({data})
});

console.log({ki: strm.read()})

strm.on("readable", function () {
    console.log({$: strm.read()})
  while (null !== strm.read()) {}
});

strm.on("end", function () {});
// strm.pipe(process.stdout);
// strm.on("end", function () {
// });

// const file = strm.readFile(process.argv[2]);
