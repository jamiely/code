'use strict';

(function() {

var MainCtrl = function ($scope, $location, $anchorScroll, projects) {
  var allProjects = [];

  function setProjects(p) {
    $scope.projects = p;
    resetScroll();
  }
  function resetScroll(time) {
    time = time || 500;
    // this is really hacky, and it seems like we'd rather use a
    // callback on the rendering of the directive (that renders the
    // projects) but that doesn't seem to be available.
    //
    setTimeout(function(){ $anchorScroll();}, time);
  }
  function search(q) {
    projects.search(q).then(function(p) {
      setProjects(p);
    });
  } 
  function reset() {
    setProjects(allProjects);
    $scope.searchText = '';
  }

  projects.index().then(function(p) {
    allProjects = p;
    setProjects(allProjects);
  });

  $scope.search = search;
  $scope.reset = reset;
};

angular.module('codeGalleryApp')
  .controller('MainCtrl', 
              ['$scope', 
               '$location',
               '$anchorScroll',
               'ProjectService', 
               MainCtrl]);
})();
