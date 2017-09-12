var express = require('express');
var app = express();

app.use(express.static('client'));
app.use('/node_modules', express.static('node_modules'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// 커밋테스트
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
// 테스트23333333333333333333
// 테스트
