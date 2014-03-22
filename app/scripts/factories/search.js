'use strict';
(function(){

function anyMatchesRE(items, re) {
  return _(items).some(function(tag) {
    return re.test(tag);
  })
}

function funProjectMatchesRegex(re) {
  return function(project) {
    return re.test(project.title)
      || re.test(project.description) 
      || anyMatchesRE(project.tags, re)
      || anyMatchesRE(project.tools, re);
  };
}

function projectSearcher(projects) {
  function search(q) {
    if(!q) return projects;
    if(q.trim() === '') return projects;

    var re = new RegExp(q, 'i');
    return _(projects)
      .filter(funProjectMatchesRegex(re))
      .value();
  }

  return search;
}

var SearchFactory = function() {
  return projectSearcher;
};
 
angular.module('codeGalleryApp')
  .service('SearchFactory', SearchFactory);
})();
