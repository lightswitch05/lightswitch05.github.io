angular
  .module('app')
  .directive('dwBlogPost', blogPost);

function blogPost() {
  var directive = {
    restrict: 'E',
    templateUrl: 'app/components/blog-post/blog-post.html',
    scope: true,
    bindToController: {
      post: '=',
      selected: '=?'
    },
    controllerAs: 'ctrl',
    controller: blogPostController
  };

  return directive;
}

function blogPostController() {
  var ctrl = this;
  this.selected = this.selected || false;
}
