var msg = 'Hello World';
console.log(msg);

var express = require("express");
var app     = express();
var path    = require("path");

app.use( express.static( path.join(__dirname, 'Assignment3_GOOGLE') ) );

app.get('/',function(req,res){
  res.sendFile(path.join('/Assignment3_GOOGLE/index.html'));
});

app.listen(3000);



console.log("Running at Port 3000");