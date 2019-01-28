// const http=require("http");

const express=require("express");

const app=express();

app.use("/",(req,res,next)=>{
    console.log("First Middleware!!!");
    next();//it moves the request to next middleware
});


app.use("/User-Product",(req,res,next)=>{
    res.send("<h1>This is User Product Page</h1>");

});

app.use("/",(req,res,next)=>{
    console.log("Second Middleware!!!");
    res.send("<h1>This is Heading 1</h1>");
    next();
});


// const server=http.createServer(app);

// server.listen(3000);

app.listen(3000);