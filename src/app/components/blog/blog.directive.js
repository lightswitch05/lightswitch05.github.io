angular
  .module('app')
  .directive('blog', blog);

function blog() {
  var directive = {
    restrict: 'E',
    templateUrl: 'app/components/blog/blog.html',
    scope: {}
  };

  return directive;
}
