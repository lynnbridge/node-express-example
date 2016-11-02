var express = require('express');
var posts = require('./mock/posts.json');

var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/template');

app.get('/', function(req, res){
  res.render('index');
});

app.get('/blog/:id', function(req, res){
  var id = req.params.id;
  if(id === undefined){
    res.status(404);
    res.send("This page doesn't exist");
  } else {
    var post = posts[id];
    res.render('post', {post: post})
  }
});

app.listen(3000, function(){
  console.log("The server is running on localhost:3000")
})
