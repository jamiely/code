'use strict';

(function() {

var MainCtrl = function ($scope, projects) {
  projects.index().then(function(p) {
    $scope.projects = p;
  });
};

angular.module('codeGalleryApp')
  .controller('MainCtrl', ['$scope', 'ProjectService', MainCtrl]);
})();
