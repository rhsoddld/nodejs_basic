
//console.log(process.argv);

//console.log(process.argv[2]);
//const fs = require('fs');

const { read, write } = require('./readwrite-export');

const request = process.argv[2];

if(request === "read") {
    read();
    // fs.readFile("./sample.txt", "utf8", function(err, data) {
    //     console.log(data);
    // });
}else if(request === "write"){
    write();
    // fs.writeFile("./sample.txt", "Hello World", function(err, data) {
    //     console.log("End");
    // });
}else {
    console.log("input read or write");
}
console.log(request);
