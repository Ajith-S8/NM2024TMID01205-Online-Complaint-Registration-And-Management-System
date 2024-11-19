const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://data:data@cluster0.ffktd.mongodb.net/data?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
   console.log("connected to mongodb")
})