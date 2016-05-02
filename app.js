var express = require("express");
var app = express();

app.get('/', function(req, res) {
    res.send('Hi there!');
});

app.get('/bye', function(req, res) {
    res.send('Goodbye!');
});

app.get('/dog', function(req, res) {
    res.send('Woof');
});

// introducing route variables
app.get('/r/:post', function(req, res) {
    var postName = req.params.post;
    res.send('This page is to show any requested post name: ' + postName);
});

// multiple route variables
app.get('/r/:post/comments/:id/:title', function(req, res) {
    var postName = req.params.post;
    var postID = req.params.id;
    var postTitle = req.params.title;
    res.send('This page is to show comments on ' + postName + ', with id ' + postID + ' and titled ' + postTitle);
});

// catch all route - order matters, keep it at the bottom
app.get('*', function(req, res) {
    res.send('Nothin\' to see here!');
});

// Cloud9 setup, no port or IP hardcoding
app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server started ====');
});