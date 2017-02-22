'use strict';

require('./requires.js');

var angular = require('angular');

angular.module("newsApp",['textAngular']);

require('./scripts/controllers/mainCtrl.js');
require('./scripts/directives/ngMenus.js');
require('./scripts/services/dataService.js');
require('./scripts/services/authService.js');




