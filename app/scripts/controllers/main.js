'use strict';

angular.module('codeGalleryApp')
  .controller('MainCtrl', ['$scope', 'ProjectService', function ($scope, projects) {
    projects.index().then(function(p) {
      $scope.projects = p;
    });
  }]);
