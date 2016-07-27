var express = require('express')
var PORT = process.env.PORT || 3000
var hello = require('./routes')

app = express()

app.get('/', hello)

app.listen(PORT, function (){
  console.log('Listening!')
})
