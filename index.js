var express = require('express');
var app = express();

app.get('/hello', (req, res) => {
  console.log('Hello world!')
  res.json('Hello world!');
});
app.listen(4000);