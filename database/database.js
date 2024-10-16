const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI).then((rq,res) =>{
    console.log("databse is connected to mongodb");
}).catch((error) =>{
    console.log("Server Eroor" , error.message);
})

