const express=require("express");
require("./database/connection");

const app=express();

app.listen(3000,()=>{
    console.log("backend in running on port number 3000")
})