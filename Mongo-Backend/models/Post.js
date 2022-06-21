const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    course_name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    cost : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('test',PostSchema);