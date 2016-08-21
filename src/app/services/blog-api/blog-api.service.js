// service
angular
  .module('app')
  .service('blogApi', blogApi);

function blogApi($http) {
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
