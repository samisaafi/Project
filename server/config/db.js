const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://samisaafi:pxvS4khP8dEUB8Rv@cluster0.gs624vj.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("connected!");
}).catch((err)=>{
    console.log("error");
})