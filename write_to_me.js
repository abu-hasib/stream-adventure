'use strict'

const { Writable } = require('stream')

class MyCustomWritable extends Writable {
  _write(chunk, encoding, callback) {
    console.log({callback})
    callback(null, chunk)
  }
}

const mcw = new MyCustomWritable()
mcw.write("Hello", "utf-8", function cb(err, chunk) {
    if(err) console.error(err)
    console.log({chunk})
})
