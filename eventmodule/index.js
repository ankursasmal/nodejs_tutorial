let g=require('events');
let event=new g();
event.on('clikbutton',()=>{
    console.log("alslslp")
})
event.on('clikbutton',()=>{
    console.log("dhhdd")
})
event.on('clikbutton',()=>{
    console.log("aldffdfkkkslslp")
})
event.on('clikbutton',()=>{
    console.log("kllf")
})
event.emit('clikbutton');


event.on('clikbutton1',(rescode,message)=>{
    console.log(`${rescode},${message}`)
})
// jodi agr pass kori sa casa arg resive hoba callback under a;
event.emit('clikbutton1',200,"ok");