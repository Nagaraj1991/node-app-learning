const express=require("express");

const app=express();

app.use("/",(req,res,next)=>{
    console.log("Middleware 1");
    next();
});

app.use("/users",(req,res,next)=>{
    console.log("User Middleware 2");

});

app.listen(3000);
