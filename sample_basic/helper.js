const name = "Mike";

//module.exports = name;


const add = function (a, b) {
    return a + b; 
};

//module.exports = add;

module.exports = {
    name: name,
    add: add
}