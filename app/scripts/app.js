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
        controller: 'MainCtrl',
        reloadOnSearch: false
      })
      .otherwise({
        redirectTo: '/'
      });

     $sceDelegateProvider.resourceUrlWhitelist([
       'self',
       'http://blog.jamie.ly/**',
       'http://jamie.ly/**',
       'https://www.youtube.com/**',
       'http://www.youtube.com/**']);
  });

