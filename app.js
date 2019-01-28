const http=require("http");

const express=require("express");

const app=express();

const routes=require("./routes")

const server=http.createServer(routes.handler);
server.listen(3000);