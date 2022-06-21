var express = require('express')
const router = express.Router();
const Post = require('../models/Post');

router.get('/',(req,res) => {
    res.send('We are on posts')
})

router.post('/',(req,res)=>{
    const post = new test({
        course_name: req.body.course_name,
        description : req.body.description,
        image: req.body.image,
        cost: req.body.cost
    });
    post.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message : err})
    })
})

module.exports = router;