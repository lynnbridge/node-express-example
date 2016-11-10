//  var express = require('express');
//  var posts = require('./mock/posts.json');

//var app = express();

//app.set('view engine', 'ejs');
//app.set('views', __dirname + '/template');

//app.get('/', function(req, res){
//    res.render('index');
//});

//app.get('/blog/:id', function(req, res){
//    var id = req.params.id;
//    if(id === undefined){
      //res.status(404);
      //res.send("This page doesn't exist");
    //} else {
//      var post = posts[id];
  //    res.render('post', {post: post})
    //}
  //});

  //app.listen(3000, function(){
//    console.log("The server is running on localhost:3000")
  //})




//stuff from class

var express = require('express');
var bodyparser = require('body-parser');
var app = express();
var route = ('./routes/routes');

app.engine('view engine', 'ejs');
app.set('views', __dirname + 'views');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//index page
app.get('/', function(res, req){
  res.render('index');
});

app.get('/search', function (req, res, next){
  var username = req.body.username;
  request
    .get('https://api.github.com/users/'+username)
    .set('Accept', 'application/json')
    .end(function(err, result){
      res.render('results', {username:result.body.login||''});
    });
  //.
});

app.listen(3000);
console.log('3000 is the magic port');
