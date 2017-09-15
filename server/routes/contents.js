var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended:true }));

var BoardContents = require('../models/boardsSchema');

router.get('/', function(req,res){
    // db에서 게시글 리스트 가져와서 출력
    BoardContents.find({}).sort({date:-1}).exec(function(err, data){
       // db에서 날짜 순으로 데이터들을 가져옴
        if(err) throw err;
        res.json(data); 
    });
});

router.post('/', function(req, res){
    // 글 작성하고 submit하게 되면 저장이 되는 부분
    var addNewTitle = req.body.addContentSubject;
    var addNewWriter = req.body.addContentWriter;
    var addNewContent = req.body.addContents;
    var addNewPasword = req.body.addContentPassword;
    addBoard(addNewTitle, addNewWriter, addNewContent, addNewPasword);
    res.redirect('/boards');
});
module.exports = router;