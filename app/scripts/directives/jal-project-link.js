'use strict';

angular.module('codeGalleryApp')
  .directive('jalProjectLink', function () {
    return {
      restrict: 'E',
      scope: {
        link: '='
      },
      templateUrl: 'views/link.html'
    }
  });
