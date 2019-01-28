const express=require("express");

const path=require("path");

const router=express.Router();

router.get("/",(req,res,next)=>{
    // console.log("This is last Middleware");
    // res.send("<h1>This is Final Middleware</h1>");
    res.sendFile(path.join(__dirname,"../","Views","shop.html"));
});

module.exports=router;