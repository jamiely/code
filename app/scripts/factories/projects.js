'use strict';

angular.module('codeGalleryApp')
  .service('ProjectService', ['$http', '$q', function ($http, $q) {
    var projectsUrl = 'code/json/projects.json';
    var projects = null;

    this.index = function() {
      var deferred = $q.defer();
      if(projects) {
        deferred.resolve(projects);
        return deferred.promise;
      }

      $http.get(projectsUrl).
        success(function(data) {
          projects = data; // cache projects
          deferred.resolve(data);
        }).
        error(function(data) {
          deferred.reject(data);
        });

      return deferred.promise;
    };
  }]);
