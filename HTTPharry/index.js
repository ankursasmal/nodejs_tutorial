// ate basic formet


// let http=require('http')


// //1. (defaultport)  port paoa jaba (port->must capital)
// // let port=process.env.PORT;


// //2. user won url port dita para
// let port=process.env.PORT ||5000;




// const server=http.createServer((req,res)=>{
    
//     res.statusCode=200;
//     res.setHeader('Content-Type','text/html');
//     res.end(`<h1>ankur server</h1>`)
//     // req is obj many property are  in req req. thia axcee possibla
//     console.log(req)
// })
// // joto khan na server ka listen korbi toto samoy not work
// server.listen(port,()=>{
//     console.log(`myport is ${port}`)
// })



//2. router create

let http=require('http')


//1. (defaultport)  port paoa jaba (port->must capital)
// let port=process.env.PORT;


//2. user won url port dita para
let port=process.env.PORT ||5000;




const server=http.createServer((req,res)=>{
    
     res.setHeader('Content-Type','text/html');
    res.end(`<h1>ankur server</h1>`)


    // req kaj req.property ta ki korbi, action a res kaj kora
    if(req.url==='/'){
        res.statusCode=200;
        let fs=require('fs');
        let data=fs.readFileSync('index.html')
    res.end(data.toString());
        
}
    else if(req.url==='/about'){
        res.statusCode=404;

res.end("jsdjsdjs");

    }

// ai url gala akta file read korbo
else if(req.url==='/contact')
// req kaj condition porjonto
{
    // action glo res throuth output
    res.statusCode=200;
    res.end("home");
 }

    else{
        res.statusCode=200;

        res.writeHead(404,{'content-type':"text/html"})
res.end('error');

    }

    // req is obj many property are  in req req. thia axcee possibla
    console.log(req)
})
// joto khan na server ka listen korbi toto samoy not work
server.listen(port,()=>{
    console.log(`myport is ${port}`)
})

