// 1. server create

// const http=require('http');

// // call back frist argu alway req,2nd res

// let server=http.createServer((req,res)=>{
// res.end("jsdjsdjs")}
// )

// // /create server ka use kor serve.ja likta pari

// server.listen(8000,"127.0.0.1",()=>{
//     console.log('ankur is makaut');
// })


// routing in node js

const http=require('http');

// call back frist argu alway req,2nd res

let server=http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url==='/'){

        res.end("home");
}
    else if(req.url==='/about'){
res.end("jsdjsdjs");

    }
    else{
        res.writeHead(404,{'content-type':"text/html"})
res.end('error');
    }
}
)

// /create server ka use kor serve.ja likta pari

// 8000,"127.0.0.1", ata holo hery port

server.listen(8000,"127.0.0.1",()=>{
    console.log('ankur is makaut');
})

// servr.listen two arg 1.port(8000,"127.0.0.1"),2.callback
