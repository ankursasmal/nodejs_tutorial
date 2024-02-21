let fs=require('fs')
let http=require('http');
let server=http.createServer((req,res)=>{

// web site dukla only one time chala ta hola akhana lik ta hoba jakana darkar saka na use
// ata sync korta hoba
let data=fs.readFileSync(`${__dirname}/read.json`,'utf-8') 
  let normal=JSON.parse(data);
 

    if(req==='/'){
// '/' page dakata chaila json data jaha to upper a declear kora acha sync bhaba
res.end(normal.name);

// req.end('bbbbjjs');
    }

    //1. process ja page darkar sa paga red korta hoba
    else if(req==='/home'){

//  1 strst process to show '/home' paga ata basi use hoi upper async bhaba declear kora jakaha na darkar sakha na use

// res.end(normal.name);

// 1 end



 // or    2 stat. only oe paga gala bar bar json dat asba convert hoba (avoid this procss)
 
//  json sanga kaj hola must {'content-type':'application/json'} ata
        res.writeHead(404,{'content-type':'application/json'});

// a casa barbbar json data asba normal covert hoba because '/home' jato bar user visit 
// korba tota ba chalba

req.end('home page');
// below line __dirname janno ja foler a acha ta get hole /read.json file a dhuklo
fs.readFile(`${__dirname}/read.json`,'utf-8',(e,data)=>{
    console.log(data);
    // main kotha res.end a responce of api return hoi
    res.end(data);
    // normal dta chaila
    let normal=JSON.parse(data);
    res.end(normal.name);

})

// 2.end


    }
    else{
        // text sang kaj hola {'content-type':'text/html'})
        res.writeHead(404,{'content-type':'text/html'});
        res.end("<h1>404 error come</h1>")
    }
})

server.listen('8000','127.0.0.1',()=>{
console.log("linon port 8000");
})