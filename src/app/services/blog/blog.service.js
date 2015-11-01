// service
angular
  .module('app')
  .service('blog', blog);

function blog($http) {
  this.posts = posts;

  function posts() {
    return $http.get('assets/posts.json', {cached: true}).then(
      function(response){
        return response.data;
      }
    );
  }
}

blog.$inject = ['$http'];
