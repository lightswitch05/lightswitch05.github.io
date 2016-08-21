angular
  .module('app')
  .directive('dwBlog', blog);

function blog() {
  var directive = {
    restrict: 'E',
    templateUrl: 'app/components/blog/blog.html',
    scope: true,
    bindToController: {},
    controllerAs: 'ctrl',
    controller: blogController
  };

  return directive;
}

function blogController(blogApi) {
  var ctrl = this;
  this.posts = [];

  blogApi.posts().then(
    function(posts){
      ctrl.posts = posts;
    }
  );
}
blogController.$inject = ['blogApi'];
