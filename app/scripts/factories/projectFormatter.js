'use strict';

angular.module('codeGalleryApp')
  .factory('ProjectFormatterFactory', function () {
    function transform(project) {
      project.links.forEach(function(link) {
        if(link.type == 'article') {
          project.mainArticleLink = link;
        }
      });
    }

    return function(project) {
      return transform(project);
    };
  });
