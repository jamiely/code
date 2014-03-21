'use strict';

angular.module('codeGalleryApp')
  .directive('jalProjectLink', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/link.html'
    }
  });
