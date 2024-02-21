let path=require('path');
console.log(path.basename("/Users/ankursasmal/node_js/pathmodule.js"))
let x=(path.parse("/Users/ankursasmal/node_js/pathmodule.js"));
console.log(x.name,x.root)