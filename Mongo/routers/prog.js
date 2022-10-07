const express = require('express')
const router1 = new express.Router
const ProgDomainTechs = require('../modules/progmodel')
//post the data
router1.post("/progdomain", async (req, res) =>{
    try{
        const addTech = new ProgDomainTechs(req.body)
        console.log(req.body);
        const newTech = await addTech.save();
        return res.status(201).send(newTech);
        // res.send("Details Received");
    }catch(e){
        return res.status(400).send(e);
    }
  })
  //Get all the data
router1.get("/progdomain", async (req, res) =>{
    try{
        const getdetails = await ProgDomainTechs.find({});
        res.send(getdetails);
    }catch(e){
        res.status(400).send(e);
    }
  })
  //Get single element
  router1.get("/progdomain/:id", async (req, res) =>{
    try{
       const _id = req.params.id; 
        const getFreelancers = await ProgDomainTechs.findById(_id);
        return res.send(getFreelancers);
    }catch(e){
        return res.status(400).send(e);
    }
  })
  module.exports = router1;