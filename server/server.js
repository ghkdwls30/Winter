var express = require('express');
var app = express();
var router = express.Router();
var BoardContents = require('./models/boardsSchema');
var mongoose = require('mongoose'); 


app.use(express.static('client'));
app.use('/node_modules', express.static('node_modules'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// npm install mongoose --save
// npm install body-parser --save
mongoose.connect('mongodb://localhost/boards');
var db =mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected");
});

var boards = require('./routes/contents');
app.use('/boards', boards);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
