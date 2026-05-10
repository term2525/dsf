const http = require('http');
var formidable = require('formidable');

const server= http.createServer((req, res)=>{
    if(req.url =='/fileupload'){
        var form = new formidable.IncomingForm();
        form.parse(req, function(err,fields,files){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(`<h1>File Uploaded</h1>`);
            res.end();
        });
    }
    else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(`
            <form action="/fileupload" method="post" enctype="multipart/form-data">
            <input type="file" name="f"> 
            <button type="submit">Send</button>
            </form>
            `)
        res.end();
    }
})

server.listen(3010, ()=>console.log("Server Started"));