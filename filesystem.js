let fs=require('fs');
 fs.writeFile('an.txt','jsjjj',(e)=>{
    console.log('dkd')
 })
 fs.appendFile('an.txt',"dieooi",(e)=>{
console.log(e)
 })
 fs.readFile('t.txt',(e,data)=>{
    console.log(data,e);
 })
 fs.rename('read.txt','t.txt',(e)=>{
    console.log(e);
 })
 fs.unlink('t.txt',(e)=>{
    console.log(e)
 });
 fs.unlink('an.txt',(e)=>{
    console.log(e)
 });fs.unlink('ank.txt',(e)=>{
    console.log(e)
 });
  