const http = require('http');
const fs = require('fs');
const {parse} = require('querystring');

const server = http.createServer((req, res)=>{
    if(req.method=='GET'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(`<h3> File Append</h3>
            <form method="POST">
            <input type="text" name="source" ><br>
            <input type="text" name="dest">
            <br>
            <input type="submit">
            </form>
            `)
    }
    else if(req.method=="POST"){
        let body='';
        req.on('data',chunk=>{body+=chunk.toString();});
        req.on('end',()=>{
            const {source, dest}= parse(body);
            fs.readFile(source,'utf8', (err,data)=>{
                if(err){
                    res.writeHead(404,{'Content-Type':'text/html'});
                    return res.end(`<h3>Erroe Reading File</h3>`);
                }
            fs.appendFile(dest, "\n"+data, (appendError)=>{
                if(appendError){
                    res.writeHead(500,{'content-type':'text/html'});
                    return res.end(`<h3>Erroe appending File</h3>`);
                }
                res.writeHead(200,{'content-type':'text/html'});
                return res.end(`<h3>File Appemded File </h3>`);
            })
            })

        });
    }
});

server.listen(3000,()=>{
    console.log("Server Started ")
})