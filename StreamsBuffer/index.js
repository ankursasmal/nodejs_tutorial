// index.txt dta stream process a asba

const fs=require('fs');
const http=require('http');
 let server=http.createServer();
//  akha na on lagia event listner add kor chi req eventname ,(call back with 2 argu)
 server.on('req',(req,res)=>{

// 1 process to read data normal process
    
//  fs.readFile('input.txt','utf-8',(err,data)=>{
//     if(err){
// return console.error(err);
//     }
// res.end( data);
// })


// 2. using streaming data inrernet according asba chunk by chunk

// const rsteaem=fs.createReadStream('input.txt');
// // chunk by chunk read korla event name data fire
// rsteaem.on('data',(chunkdata)=>{
//     // ja data read korch tar na chunk tai res a chunk pass hocha
//     res.end(chunkdata);
// })
// // read sas hola end event fire
// rsteaem.on('end',()=>{
//     res.end();
// })
// rsteaem.on('error',()=>{
//     res.end('file not found')
// })

// 3rd process of readstream
//kom file thaka data read tar nam;
const rstream=fs.createReadStream("input.txt");
// wrrite korbo kothai sata
rstream.pipe(res);
});
server.listen(8000,'127.0.0.1');
