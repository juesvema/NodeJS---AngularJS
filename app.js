// Define the dependencies that the project will use
var express = require('express');
var app = express();
var fs = require("fs");

// Returns the json file as a result of the request made to nodejs
 app.get('/jsonList', function (req, res) {
    fs.readFile('students.json', 'utf8',(err, data) => {
      if (err) throw err;
      res.end(data);
    });
}).listen(8080);

app.use(express.static(__dirname +'/'));
app.get('/', function(req,res){
 res.sendFile('/index.html');
});