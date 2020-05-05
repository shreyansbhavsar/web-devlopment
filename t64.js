// https://nodejs.org/api/modules.html
const fs = require("fs");
let text = fs.readFileSync("1.txt","utf-8");
text =text.replace("shreyans","SHREY");
console.log(text);

console.log("creating a new file");
fs.writeFileSync("hely.txt",text)