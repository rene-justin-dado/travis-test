var test = require('tape')
var hello = require('../routes')

test('Testing hello', function (t){
  var expected = 'Hello World!'
  var res = {
    send: send
  }
  function send(actual) {
    t.equal(expected, actual)
    t.end()
  }

  hello(null, res)
})
