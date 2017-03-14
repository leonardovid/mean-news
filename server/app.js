'use strict';

var express = require('express');
var newsRouter = require('./api/news');
var usersRouter = require('./api/users');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var mid = require('./middleware/index');
var fileUpload = require('express-fileupload');

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

/*Middleware para subir archivos*/
app.use(fileUpload());

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

/*Ruta para añadir imagenes*/
app.post('/api/upload', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
 
 
  let file = req.files.upload;
 

  file.mv(path.join(__dirname, '../public', 'img/'+file.name), function(err) {
    if (err)
      return res.status(500).send(err);
 
    res.send('File uploaded!');
  });
});


app.listen(3000, function () {
  console.log('App listening on port 3000!')
})