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

function blogController(blog) {
  var ctrl = this;
  this.posts = [];

  blog.posts().then(
    function(posts){
      ctrl.posts = posts;
    }
  );
}
blogController.$inject = ['blog'];
