const http=require('http');
const fs=require('fs');


http.createServer((req,res)=>{

    if(req.url=='/'){

        let data=fs.readFileSync('home.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();


    }
    else if(req.url=='/about'){

       let data=fs.readFileSync('about.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    }
    else if(req.url=='/contact'){

        let data=fs.readFileSync('contact.html');
         res.writeHead(200,{'Content-Type':'text/html'});
         res.write(data);
         res.end();
     }
     else if(req.url=='/file-write'){

        fs.writeFileSync('demo.txt','hello world');
       
        let data=fs.readFileSync('file-write.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
     }
  
    

}).listen(3000,()=>{
    console.log("starts listening on port 3000");
})