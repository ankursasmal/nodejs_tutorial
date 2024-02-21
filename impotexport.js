
// more then 1 using multiline export
// let add=(a,b)=>{
//     return a+b;
// }
// let a="ankur";
// module.exports.a=a;
// module.exports.add=add;


// /only 1 export korla
// module.exports=add;



// single line export
let add=(a,b)=>{
    return a+b;
}
let a="ankur";
let roll=0;
module.exports.a=a;
module.exports.add=add;



// import file index.js

// using obj
// let obj=require('./impotexport.js');
// console.log(obj.add(8,9),obj.a)

// let {add,a}=require('./impotexport.js');
// console.log(add(8,9),a)
