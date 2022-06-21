const express = require('express')
const router = new express.Router
const FreelancersInfo = require('../modules/freelancers')
//post the data
router.post("/topfreelancers", async (req, res) =>{
    try{
        const addFreelancer = new FreelancersInfo(req.body)
        console.log(req.body);
        const newfreelancer = await addFreelancer.save();
        res.status(201).send(newfreelancer);
    }catch(e){
        res.status(400).send(e);
    }
  })
  //Get all the data
  router.get("/topfreelancers", async (req, res) =>{
    try{
        const getFreelancers = await FreelancersInfo.find({});
        res.send(getFreelancers);
    }catch(e){
        res.status(400).send(e);
    }
  })
  //Get single element
  router.get("/topfreelancers/:id", async (req, res) =>{
    try{
       const _id = req.params.id; 
        const getFreelancers = await FreelancersInfo.findById(_id);
        res.send(getFreelancers);
    }catch(e){
        res.status(400).send(e);
    }
  })
  //Update single element
  router.patch("/topfreelancers/:id", async (req, res) =>{
    try{
       const _id = req.params.id; 
        const getFreelancers = await FreelancersInfo.findByIdAndUpdate(_id,req.body,{
          new : true
        });
        res.send(getFreelancers);
    }catch(e){
        res.status(500).send(e);
    }
  })
  //Update single element
  router.delete("/topfreelancers/:id", async (req, res) =>{
    try{
       const _id = req.params.id; 
        const getFreelancers = await FreelancersInfo.findByIdAndDelete(_id);
        res.send(getFreelancers);
    }catch(e){
        res.status(500).send(e);
    }
  })

  module.exports = router;