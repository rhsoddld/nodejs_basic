const fs = require('fs');

const person = {
    name: "Mike",
    age: 23
}
const read = function() {
    fs.readFile("./sample.json", "utf8", function(err, data){
        console.log(data);
        console.log(data.name);
        const person = JSON.parse(data)
        console.log(person.name);
        console.log(person.age);
    });
};

const write = function() {
    fs.writeFile("sample.json", JSON.stringify(person), function() {
        console.log("write");  
    });      
};


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
