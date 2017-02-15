'use strict';

var angular = require('angular');


angular.module("newsApp", []);

require('./scripts/controllers/mainCtrl.js');
require('./scripts/controllers/newsCtrl.js');
//require('./scripts/directives/news.js');
require('./scripts/services/dataService.js');
require('./scripts/services/authService.js');
require('./scripts/services/templateService.js');


