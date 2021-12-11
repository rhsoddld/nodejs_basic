const fs = require('fs');

const read = function() {
    fs.readFile("./sample.txt", "utf8", function(err, data){
        console.log(data);
    });
};

const write = function() {
    fs.writeFile("sample.txt", "Hello world", function() {
        console.log("write");  
    });      
};

module.exports = {
    read: read,
    write: write
};

