// synchronous or blocking 
// line by line execution  synchronous (not granted bac  function thaty way ok)

// Asynchoronus or non-blocking 
// line by line execution not guaranted
// callbacks will fire 


const fs = require("fs");
let text = fs.readFile("1.txt","utf-8",(err,data) =>{
     console.log(err,data);
 });
//  read file Asynchoronus ma execute thay and ha biju pehla thay and pachi read thai jay pachi execute file kare ok 
 console.log('bvhfdkghebnjr');