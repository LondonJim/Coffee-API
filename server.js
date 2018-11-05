var express = require("express");
var app = express();

var server = app.listen(4000, function() {
  console.log("please navigate to http://localhost:4000 in your client")
})

app.get('/', function(req, res) {
  var parsedJSON = require('./hipstercoffee.json')
  res.send(JSON.stringify(parsedJSON))
});

app.get('/:id', function(req, res) {
  var parsedJSON = require('./hipstercoffee.json')
  res.send(JSON.stringify(parsedJSON[0][req.params.id]))
});

app.get('/:id/:item', function(req, res) {
  var parsedJSON = require('./hipstercoffee.json')
  res.send(JSON.stringify(parsedJSON[0][req.params.id][0][req.params.item]))
});

module.exports = server;
