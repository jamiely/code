'use strict';

angular.module('codeGalleryApp')
  .factory('ProjectFormatterFactory', function () {
    function transform(project) {
      project.images = [];
      project.links = project.links || [];
      project.links.forEach(function(link) {
        if(link.type == 'article') {
          project.mainArticleLink = link;
        }
        if(link.type == 'image') {
          project.images.push(link);
          project.mainImage = link;
        }
      });
    }

    return function(project) {
      return transform(project);
    };
  });
