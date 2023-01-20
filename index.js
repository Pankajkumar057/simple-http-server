// const http=require("http");
// const fs=require("fs")
// const PORT=8000;
// fs.readFile("index.html", (err,html)=>{
//     if(err) console.log(err);
//     http.createServer (function(req,res){
//         res.writeHeader(200,{"Content-Type":"text/html"});
//         res.write(html)
//         res.end();
//     }).listen(PORT)
// })

const http=require("http");
const fs=require("fs");

fs.readFile("index.html",(err,html)=>{
    if(err){
        console.log(err);
    }else{
        const server=http.createServer((req,res)=>{
            res.writeHeader(200,{"Content-Type":"text/html"});
            res.write(html);
            res.end()
        });
        server.listen(8008,()=>{
            console.log("server started");
        })
    }
})