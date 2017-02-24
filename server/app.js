'use strict';

var express = require('express');
var router = require('./api')

var app = express();

app.use('/',express.static('public'));
app.use('/api',router);
app.get('*', function(req, res){
  res.sendfile('public/index.html');
});

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})