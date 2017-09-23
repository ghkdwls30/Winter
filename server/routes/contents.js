var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var BoardContents = require('../models/boardsSchema');

router.get('/', function(req,res){
    BoardContents.find({}).sort({date:-1}).exec(function(err, data){
        if(err) throw err;
        res.json(data); 
    });
});

router.get("/:id", function(req, res) {
    BoardContents.findById(req.params.id, function(err, data) {
        if(err)   return res.status(500).send(err);
        if(!data) return res.status(404).send({ err: "boards not found" });
        res.json(data);
    });  
  });

router.post('/', function(req, res){
    console.log( req.body.title);
    BoardContents.create(req.body, function (err, data) {
        if(err) return res.status(500).send(err);
        res.end();
    });
});

router.put("/:id", function(req, res) {
    BoardContents.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, data) {
        if(err) return res.status(500).send(err);
        res.json(data);
    });
});

router.delete("/:id", function(req, res) {
    BoardContents.remove({ id: req.params.id }, function(err, data) {
        if(err) return res.status(500).send(err);
        res.json(data);
    });
});


module.exports = router;