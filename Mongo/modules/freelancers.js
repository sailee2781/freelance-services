const express = require("express")
const mongoose = require("mongoose");

const freelancerSchema = new mongoose.Schema({
    freelancer_name : {
        type : String,
        required : true,
    },
    post : {
        type : String,
        required : true,
    },
    review : {
        type : String,
        required : true,
    },
    image : {
        type : String,
        required : true,
    }
});
//creating collection
const FreelancersInfo = new mongoose.model('FreelancerInfo',freelancerSchema);

module.exports = FreelancersInfo;