let fs=require('fs')
let boidata={name:'anskks',

roll:3,no:'pop'
};
//normal obj to json
let json=JSON.stringify(boidata);
// file a stor
fs.writeFile('read.json',json,(err)=>{
    console.log(err)
});
// file thaka read
 fs.readFile('read.json',"utf-8",(err,data)=>{
    // data holo  json formet a
    console.log(data);
    // convert noormal obj
    let normal=JSON.parse(data);
    console.log(normal)
});


 