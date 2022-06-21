const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/freelance",{
    useNewUrlParser : true,
}).then(() => {
    console.log("Database Connected..!")
}).catch((e) => {
    console.log("Not connected..!")
})