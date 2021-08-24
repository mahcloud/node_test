var express = require('express');
var app = express();

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

app.get('/hello', async (req, res) => {
  await sleep(1000);
  res.json('Hello world!');
});
app.listen(4000);