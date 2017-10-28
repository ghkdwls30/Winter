var express = require('express');
var app = express();

var mysql = require('mysql');
global.pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'rhtmxm',
    database : 'database',
    typeCast : true,
    multipleStatements: true
});

var mybatis = require('mybatisnodejs');

app.use(mybatis.Contexto.domainMiddleware);
app.use(mybatis.Contexto.middlewareOnError);

var dir_xml = 'c:/node/workspace/WINTER/server/sql/'

var sessionFactory  = new mybatis.Principal().processe(dir_xml);
global.sessionFactory = sessionFactory;


var aa = sessionFactory.getSQL('query_question.selectuser', {name : 1});

console.log(aa);
