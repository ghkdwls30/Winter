var mongoose = require('mongoose');
var boardSchema = mongoose.Schema({
    title: String,
    creator: [
        {
            "name": String
        }   
    ],
    createdat: Date,
    lastmodifiedat: Date,
    contents: String,
    viewcount: {type: Number, default: 0},
    attatch: [
        {
            "name": String,
            "link": String
        }],    
    deleted: {type: Boolean, default: false} 
});
module.exports =  mongoose.model('BoardContents', boardSchema);