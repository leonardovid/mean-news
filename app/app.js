'use strict';

require('./requires.js');

var angular = require('angular');

angular.module("newsApp",['textAngular','ngRoute']);

//Configuraciones
require('./config/routes.js');

//Controladores
require('./scripts/controllers/newsCtrl.js');
require('./scripts/controllers/usersCtrl.js');
require('./scripts/controllers/panelCtrl.js');
require('./scripts/controllers/authCtrl.js');
require('./scripts/controllers/profileCtrl.js');

//Directivas
require('./scripts/directives/ngMenus.js');
require('./scripts/directives/ngFileSelect.js');

//Servicios
require('./scripts/services/dataService.js');
require('./scripts/services/authService.js');

//Provedores
require('./scripts/providers/fileReader.js');



