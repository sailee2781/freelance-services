var express = require('express')
var app = express()
var mongoose = require('mongoose')
const port = 8181
const bodyParser = require('body-parser')
require('dotenv/config')


const postsRoutes = require('./Routes/posts')

app.use('/posts',postsRoutes)
app.get('/',(req,res) => {
    res.send('We are on home')
})

mongoose.connect(process.env.DB_CONNECTION,{
    useNewUrlParser:true
}, () => console.log("DB connected!"))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })