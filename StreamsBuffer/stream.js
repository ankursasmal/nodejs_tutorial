  let fs=require('fs')
  let http=require('http');
  let server=http.createServer();
  // event fire with out event modl
// 1.
  //   server.on('request',(req,res)=>{

// fs.readFile('index.txt',(e,d)=>{
//   if(e)return console.log(e);
//   res.end(d.toString());
// })
//   })

// 2.process
//  server.on('request',(req,res)=>{

// let rstreaam=fs.createReadStream('index.txt');

// rstreaam.on('data',(chunk)=>{
// res.end(chunk);
//  })
  
// rstreaam.on('end',()=>{
//   res.end();
// })
// rstreaam.on('error',()=>{
//   res.end('error')
// })
 
//   })


// 3.best ppe ar under 4 event(data,end,error,final) wrap acha
server.on('request',(req,res)=>{
  let rstream=fs.createReadStream('index.txt');
   rstream.pipe(res);
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('ankur')
  })