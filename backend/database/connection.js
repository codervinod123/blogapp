const mongoose=require("mongoose");
const mongo=mongoose.connect("mongodb://localhost:27017/blogapp",{}).then(()=>{
  console.log("connected to the database successfully");
}).catch((err)=>{
    console.log("can not be connected"+err);
})
