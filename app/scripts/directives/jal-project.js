'use strict';

angular.module('codeGalleryApp')
  .directive('jalProject', function () {
    return {
      restrict: 'E',
      scope: {
        project: '='
      },
      templateUrl: 'views/project.html'
    }
  });
