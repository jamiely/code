'use strict';

angular.module('codeGalleryApp')
  .service('ProjectService', ['$http', '$q', 'ProjectFormatterFactory', 'SearchFactory',
           function ($http, $q, formatProject, searchFactory) {
    var projectsUrl = 'code/json/projects.json';
    var projects = null;

    var search = this.search = function(q) {
      return index().then(function(projects) {
        return searchFactory(projects)(q);
      });
    };

    var index = this.index = function() {
      var deferred = $q.defer();
      if(projects) {
        deferred.resolve(projects);
        return deferred.promise;
      }

      $http.get(projectsUrl).
        success(function(data) {
          projects = data; // cache projects
          projects.forEach(formatProject);
          deferred.resolve(projects);
        }).
        error(function(data) {
          deferred.reject(data);
        });

      return deferred.promise;
    };
  }]);
