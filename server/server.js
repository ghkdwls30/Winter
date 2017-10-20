var express = require('express');
var app = express();
//var router = express.Router();
//var BoardContents = require('./models/boardsSchema');
var mongoose = require('mongoose'); 

var mysql = require('mysql');
global.yhbatis = require('yhbatis').yhbatis;
 
global.pool = mysql.createPool({
    host    :'localhost',
    port : 3306,
    user : 'ghostone',
    password : 'ghostone',
    connectionLimit:20,
    waitForConnections:true,
    typeCast : true,
    multipleStatements: true
});
 
yhbatis.createYHBatis(
[
    "d:/node/workspace/Winter/server/sql.xml"
]);
 

//app.use(express.static('client'));
//app.use('/node_modules', express.static('node_modules'));

app.get('/', function (req, res) {
  var mapping = {};
  mapping.account = 'admin';
  var result = yhbatis.sqlSection("selectUser",mapping,function(row, callback){
     console.log(row);
  });
  res.send('Hello World!');
});

// npm install mongoose --save
// npm install body-parser --save
//mongoose.connect('mongodb://localhost/boards');
//var db =mongoose.connection;
//db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', function() {
//  console.log("connected");
//});

//var boards = require('./routes/contents');
//app.use('/boards', boards);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
