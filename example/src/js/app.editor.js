// Generated by CoffeeScript 2.1.1
(function() {
  var app;

  app = angular.module('example.app.editor', ['example.api', 'example.app.photos']);

  app.controller('EditController', [
    '$scope',
    'Post',
    function($scope,
    Post) {
      $scope.newPost = new Post();
      return $scope.save = function() {
        return $scope.newPost.$save().then(function(result) {
          return $scope.posts.push(result);
        }).then(function() {
          // Reset our editor to a new blank post
          return $scope.newPost = new Post();
        }).then(function() {
          // Clear any errors
          return $scope.errors = null;
        },
    function(rejection) {
          return $scope.errors = rejection.data;
        });
      };
    }
  ]);

}).call(this);