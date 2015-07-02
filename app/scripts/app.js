'use strict';

/**
 * @ngdoc overview
 * @name jcgriffinSiteApp
 * @description
 * # jcgriffinSiteApp
 *
 * Main module of the application.
 */
angular
  .module('jcgriffinSiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
