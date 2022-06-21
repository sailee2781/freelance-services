const express = require("express")
const mongoose = require("mongoose");

const ProgSchema = new mongoose.Schema({
    domain_name : {
        type : String,
        required : true,
    },
    freelancer_name : {
        type : String,
        required : true,
    },
    description : {
        type : String,
    },
    intro : {
        type : String,
        required : true,
    },
    cost : {
        type : String,
        required : true,
    },
    image : {
        type : String,
        required : true,
    }
});
//creating collection
const ProgDomainTechs = new mongoose.model('ProgDomainTech',ProgSchema);

module.exports = ProgDomainTechs;