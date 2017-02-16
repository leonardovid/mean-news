'use strict';

require('./vendor.js');

var angular = require('angular');
angular.module("newsApp", []);

require('./scripts/controllers/mainCtrl.js');
require('./scripts/directives/ngMenus.js');
require('./scripts/services/dataService.js');
require('./scripts/services/authService.js');




