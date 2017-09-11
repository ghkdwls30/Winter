var express = require('express');
var app = express();

app.get('/test', function (req, res){     
   // res.send( "hello");
    res.sendfile( "./public/index.html");
});


app.get('/test1', function (req, res){     
    // res.send( "hello");
     res.sendfile( "./public/index.html");
 });

 
app.get('/test2', function (req, res){     
    // res.send( "hello");
     res.sendfile( "./public/index.html");
 });

 
app.get('/test3', function (req, res){     
    // res.send( "hello");

    // 서비스 

    // 오브젝트
     var object = 1;
     res.sendfile( "./public/index.html");     
 });

app.listen( 3000, function() {
    console.log( 'Example app ');
})