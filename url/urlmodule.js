// npm folder uder thakla react moto import
// import myURL from 'url'

// normal require thia import
let  myURL =require('url')
  myURL = new URL('https://example.org:8000');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';
console.log(myURL.href)



// ans:https://example.org:8000/a/b/c?d=e#fgh asli url moto ans