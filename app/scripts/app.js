'use strict';

angular.module('codeGalleryApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider, $sceDelegateProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

     $sceDelegateProvider.resourceUrlWhitelist([
       'self',
       'https://www.youtube.com/**',
       'http://www.youtube.com/**']);
  });

