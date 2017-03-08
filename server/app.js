'use strict';

var express = require('express');
var router = require('./api/index')
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

require('./database.js');
require('./seed.js')

app.use(bodyParser.json())

app.use('/',express.static('public'));

app.use('/api',router);

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})