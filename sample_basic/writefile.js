const fs = require('fs');

console.log("start");
fs.writeFile("sample.txt", "Hello world", function() {
  console.log("write");  
});

console.log("end");