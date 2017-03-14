'use strict';

var express = require('express');
var newsRouter = require('./api/news');
var usersRouter = require('./api/users');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var mid = require('./middleware/index');

var app = express();

/*Sesiones*/
app.use(session({
  secret: 'Noticias Mean',
  resave: true,
  saveUninitialized: false,
}))

/*Base de Datos*/
require('./database.js');
require('./seed.js')

/*Configuracion de body parser*/
app.use(bodyParser.json())

/*Sirve angular en '/' */
app.use('/',express.static('public'));

/*Autorizaciones*/
app.get('/auth',mid.userLogued);
app.get('/panel',mid.userLoguedOut);

/*Rest api*/
app.use('/api',newsRouter);
app.use('/api',usersRouter);

/*Sirve la carpeta publica para las demas rutas de angular*/
app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});


app.listen(3000, function () {
  console.log('App listening on port 3000!')
})