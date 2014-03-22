'use strict';

(function() {

var MainCtrl = function ($scope, projects) {
  var allProjects = [];

  function search(q) {
    projects.search(q).then(function(p) {
      $scope.projects = p;
    });
  } 
  function reset() {
    $scope.projects = allProjects;
    $scope.searchText = '';
  }

  projects.index().then(function(p) {
    allProjects = p;
    $scope.projects = p;
  });

  $scope.search = search;
  $scope.reset = reset;
};

angular.module('codeGalleryApp')
  .controller('MainCtrl', ['$scope', 'ProjectService', MainCtrl]);
})();
