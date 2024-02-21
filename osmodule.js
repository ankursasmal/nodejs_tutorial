let os=require('os');
let free=os.freemem();
// ans on bite
console.log(free);
console.log(os.totalmem()/1024/1024/1024);
console.log(os.hostname());
console.log(os.machine());
console.log(os.arch());
