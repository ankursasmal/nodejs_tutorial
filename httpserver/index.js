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
        req.end("home");
}
    else if(req.url==='/about'){
req.end("jsdjsdjs");

    }
    else{
        res.writeHead(404,{'content-type':"text/html"})
req.end('error');
    }
}
)

// /create server ka use kor serve.ja likta pari

server.listen(8000,"127.0.0.1",()=>{
    console.log('ankur is makaut');
})

