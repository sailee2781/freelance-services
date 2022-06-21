const express = require('express')
const router2 = new express.Router
const ContactDetails = require('../modules/contactmodel')
//post the data
router2.post("/contact", async (req, res) =>{
    try{
        const addcontact = new ContactDetails(req.body)
        console.log(req.body);
        const newcontact = await addcontact.save();
        res.status(201).send(newcontact);
        res.send("Details Received");
    }catch(e){
        res.status(400).send(e);
    }
  })

  module.exports = router2;