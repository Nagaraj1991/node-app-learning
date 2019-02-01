const express=require("express");

const path=require("path");

const rootDir=require("../util/path")

const router=express.Router();

router.get("/get-products",(req,res,next)=>{
    // console.log("This is last Middleware");
    // res.send("<h1>This is Final Middleware</h1>");
    res.sendFile(path.join(rootDir,"Views","shop.html")); 
});

module.exports=router;