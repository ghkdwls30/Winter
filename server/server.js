var express = require('express');
var app = express();

var mysql = require('mysql');
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
 
var mybatis = require('mybatisnodejs');

app.use(mybatis.Contexto.domainMiddleware);
app.use(mybatis.Contexto.middlewareOnError);

var dir_xml = 'c:/node/workspace/WINTER/server/sql/';

var sessionFactory  = new mybatis.Principal().processe(dir_xml);
global.sessionFactory = sessionFactory;

sessionFactory.selecioneUm('query_question.selectUser', {id: 1}, pool, function(user) {
  //console.log(user);
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
