var express = require('express')
var cors = require('cors')
var app = express()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();
const jsonexport = require('jsonexport');
const os = require("os");

app.use(jsonParser); // use it globally
app.use(cors())
//const express = require('express')
//const app = express()
const port = 8080
const csv = require('csv-parser');
const fs = require('fs');

app.get('/top_freelancers', (req, res) => {
  const results = [];

  fs.createReadStream('freelancers.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      console.log(results);
      res.json(results)
    });
});
app.post('/top_freelancers', function (req, res) {
  
    var myJsonString = JSON.stringify(req.body )
    fs.appendFile('freelancers.csv', myJsonString+ "\n", err => {
      if (err) {
        console.error(err)
        
        return
      }
      //file written successfully
    })
    console.log(myJsonString)
    console.log(req.body);
    res.send("Details Received");
  });
  app.get('/programming', (req, res) => {
    const results = [];
  
    fs.createReadStream('prog.csv')
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        console.log(results);
        res.json(results)
      });
  })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


