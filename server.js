
var express = require('express');
var app = express();


app.engine('html', require('ejs').renderFile);
app.use("/Scripts", express.static(__dirname + '/Scripts'));

app.use("/views", express.static(__dirname + '/views'));


app.get('/', function (req, res) {
  res.render('index.html');
});


app.listen(8187, function () {
  console.log(" http://localhost:8187/ in browser.");
});

app.get('/about', function (req, res) {
  debugger;
  console.log("amount passed :"+req.body.params);
  var amount = req.query.amount;
  res.send('About this wiki');
})








