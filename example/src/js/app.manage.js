// Generated by CoffeeScript 2.1.1
(function() {
  var app;

  app = angular.module('example.app.manage', ['example.api', 'example.app.editor']);

  app.controller('DeleteController', [
    '$scope',
    'AuthUser',
    function($scope,
    AuthUser) {
      $scope.canDelete = function(post) {
        return post.author.username === AuthUser.username;
      };
      return $scope.delete = function(post) {
        return post.$delete().then(function() {
          var idx;
          // Remove it from the list on success
          idx = $scope.posts.indexOf(post);
          return $scope.posts.splice(idx,
    1);
        });
      };
    }
  ]);

}).call(this);
