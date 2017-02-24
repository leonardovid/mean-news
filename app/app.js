'use strict';

require('./requires.js');

var angular = require('angular');

angular.module("newsApp",['textAngular','ngRoute']);

//Controllers
require('./scripts/controllers/newsCtrl.js');
require('./scripts/controllers/usersCtrl.js');
require('./scripts/controllers/panelCtrl.js');
require('./scripts/controllers/authCtrl.js');

//Directives
require('./scripts/directives/ngMenus.js');

//Services
require('./scripts/services/dataService.js');
require('./scripts/services/authService.js');
require('./config/routes.js');




