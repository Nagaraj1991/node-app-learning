const express=require("express");

const router=express.Router();

router.use("/add-product",(req,res,next)=>{
    console.log("In another Middleware");
    res.send("<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Click Me</button></form>");
    //res.end();
    //next();
});

router.use("/product",(req,res,next)=>{
    console.log(req.body);
    res.redirect("/");
    
});

module.exports=router;