let http=require('http');
let url=require('url');
let fs=require('fs');
let xo=fs.readFileSync(`${__dirname}/a.json`,'utf-8');
     let data= JSON.parse(xo);
 
 let server=http.createServer((req,res)=>{
    
     if(req.url==='/'){
    req.statusCode=200;
    fs.readFile('index.html',(e,d)=>{
                res.end(d.toString());

    })
    }
  else  if(req.url==='/contact'){ 
        res.statusCode=200;

fs.readFile('contact.html','utf-8',(e,d)=>{
    // end a d mane hole render holo then nested routing
res.end(d);
// nested routing
if(req.url==='/contact/l'){
 res.end('sasmal')
}
else if(req.url==='/contact/m'){
    res.end('ankur')
   }

})   
    }
else  if(req.url==='/about'){
    fs.readFile('About.html',(e,d)=>{
          res.end(d.toString())

    })

    }
else{
    res.writeHead(404,{'Content-type':'text/html'})
 res.end('<p>hffkkf</p>');
}
})
server.listen(8000,'127.0.0.1',()=>{
console.log('ankur')
})