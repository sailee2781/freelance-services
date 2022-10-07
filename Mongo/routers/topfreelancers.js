const express = require('express')
const router = new express.Router
const FreelancersInfo = require('../modules/freelancers')
//post the data
router.post("/topfreelancers", async (req, res) => {
  try {
    const addFreelancer = new FreelancersInfo(req.body)
    console.log(req.body);
    const newfreelancer = await addFreelancer.save();
    return res.status(201).send(newfreelancer);
  } catch (e) {
    return res.status(400).send(e);
  }
})
//Get all the data
router.get("/topfreelancers", async (req, res) => {
  try {
    // console.log("called")
    const getFreelancers = await FreelancersInfo.find({});
    // console.log(getFreelancers);
    return res.send(getFreelancers);
  } catch (e) {
    return res.status(400).send(e);
  }
})

module.exports = router;