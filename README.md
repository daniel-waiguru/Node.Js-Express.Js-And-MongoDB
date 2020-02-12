# Node.Js-Express.Js-And-MongoDB
Learning Backend Web development with Node.Js, Express.Js Server side framework and MongoDB

Node.js is a server side runtime environment built on Google Chrome's javascript Engine V8(which is built on C++)
## Features of Node.js
..*Node.js apps output data in chunks thus they never buffer
..*Single threaded and uses event looping
..*Asychronous and event driven - APIs of Node.js library are non-blocking
..*Node.js library is very first in execution

### To run node.js in your machine;
1. install [node.js](https://nodejs.org/en/)
2. install your favorite text editor eg VSCode, Subline etc
3. To check whether node js is installed corrrectly use the command ```node -v
4. To run node.js app use the commamd ```node <filename>
eg ```node main.js

Here is simple web node.js app using http module
```javascript
const http = require('http')

const server = http.createServer((req, res)=>{
	res.end('My first simple web server');
});

server.listen(4000, ()=>{
	console.log('Server started at port 4000.');
});
```
### Express.js server-side framework
Express.js is flexible node.js web application framework
##### to install express.js use the command npm express -save
