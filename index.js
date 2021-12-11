const express = require('express');
const app = express()

//console.log(__dirname);
//C:\Users\rhsod\Documents\GitHub\nodejs_basic\web-server
const path = require('path');   
//console.log(path);
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.urlencoded({extended: false})); // for getting post method request 

// app.get('/', function(req, res) {
//     console.log(req);
//     res.send('<h1>Top Page</h1>')
// })

// app.get('/about', function(req, res) {
//     res.send('About Page')
// })

app.post('/api/v1/quiz', function(req, res) {
    const answer = req.body.answer;
//    res.send(answer);

    if(answer === "2"){
        res.redirect("/correct.html")
//        res.send("<h1>right answer</h1>");
    }else {
        res.redirect("/wrong.html")
//        res.send("wrong answer");
    }
});


app.get('/api/v1/users', function(req, res) {
    res.send({
        name: "Mike",
        age: 30 
    });
});

const PORT = process.env.PORT || 3000;      // heroku port or localhost 3000
app.listen(PORT, function() {
    console.log('Running')
});

console.log("before callback function return");