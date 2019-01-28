const express=require("express");
const bodyParser=require("body-parser");
const adminRouter=require("./Routes/admin")
const shopRouter=require("./Routes/shop");

const app=express();

app.use(bodyParser.urlencoded({extended:false}));

// app.use("/",(req,res,next)=>{
//     console.log("This always runs");
//     //next();
// });

app.use(adminRouter);

app.use(shopRouter);

app.use((req,res,next)=>{
    res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(3000);