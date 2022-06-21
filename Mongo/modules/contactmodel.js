const express = require("express")
const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    full_name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    domain : {
        type : String,
    },
    message : {
        type : String,
        required : true,
    }
});
//creating collection
const ContactDetails = new mongoose.model('ContactDetail',ContactSchema);

module.exports = ContactDetails;