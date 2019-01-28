const express=require("express");

const router=express.Router();

router.get("/",(req,res,next)=>{
    // console.log("This is last Middleware");
    // res.send("<h1>This is Final Middleware</h1>");
    res.sendFile("./Views/shop.html");
});

module.exports=router;