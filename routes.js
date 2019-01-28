const fs=require("fs");

const requestHandler=(req,res)=>{

    const url=req.url;
    const method=req.method;

    if(url==="/")
    {
        res.write("<html>");
        res.write("<head><title>/</title></head>");
        res.write("<body><form method='POST' action='/message'><input type='text' name='message'><button type='submit'>Click Me</button></form></body>");
        res.write("</html>");
        return res.end();
    }
    if((url==="/message")&&(method==="POST"))
    {
        const body=[];
        
        req.on("data",(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        return req.on("end",()=>{
            const parsedBody=Buffer.concat(body).toString();
            console.log(parsedBody);
            const message=parsedBody.split("=")[1];
            //fs.writeFileSync('message.txt',message);
            fs.writeFile('message.txt',message,err=>{
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end();
            });
        });           
    }
        res.setHeader('Content-Type','text/html');
        res.write("<html>");
        res.write("<head><title>/</title></head>");
        res.write("<body><h1>Hai</h1></body>");
        res.write("</html>");
        res.end();
};

//module.exports=requestHandler;
/*module.exports={
    handler:requestHandler,
    someText='Some hard coded Text'
};*/
//module.exports.handler=requestHandler;
//module.exports.someText='Some hard coded Text';

exports.handler=requestHandler;
exports.someText='Some hard coded Text';
