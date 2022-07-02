const mongoose = require('mongoose');

const local = "mongodb://localhost:27017/freelance";
const hosted = "mongodb+srv://freelance_services:freelance_services@cluster0.gyndj.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(hosted,{
    useNewUrlParser : true,
}).then(() => {
    console.log("Database Connected..!")
}).catch((e) => {
    console.log("Not connected..!")
})