const routeHandler=(req,res)=>{
    const url=req.url;
    const method=req.method;

    if(url==="/")
    {
        res.write("<html>");
        res.write("<head><title>Home page</title></head>");
        res.write("<body><form action='/create-user' method='POST'><input type='text' name='username'><button type='submit'>Save User</button></form></body>");
        res.write("</html>");
        return res.end();
    }
    if((url==="/users"))
    {
        res.write("<html>");
        res.write("<head><title>Home page</title></head>");
        res.write("<body><ul><li>User 1</li><li>User 2</li></ul></body>");
        res.write("</html>");
        return res.end();
    }
    if((url==="/create-user")&&(method==="POST"))
    {
        const body=[];
        
        req.on("data",chunk=>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on("end",()=>{
            const parsedData=Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
            //console.log(parsedData);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader("Content-Type","text/html");
    res.write("<html>");
    res.write("<head><title>Main page</title></head>");
    res.write("<body><h1>Main Page</h1></body>");
    res.write("</html>");
    res.end();
   

}
module.exports=routeHandler;