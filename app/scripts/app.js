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
  .module('trailerSiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'uiGmapgoogle-maps'
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
      .when('/findus', {
        templateUrl: 'views/findus.html',
        controller: 'FindusCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
