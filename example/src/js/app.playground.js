// Generated by CoffeeScript 2.1.1
(function() {
  var app;

  app = angular.module('example.app.playground', ['example.api.playground']);

  app.controller('AppController', [
    '$scope',
    'User',
    function($scope,
    User) {
      $scope.users = [];
      $scope.newUsername = "";
      $scope.loadUsers = function() {
        // Reload the users
        return User.query().$promise.then(function(results) {
          return $scope.users = results;
        });
      };
      $scope.addUser = function() {
        var user;
        user = new User({
          username: $scope.newUsername
        });
        $scope.newUsername = "";
        return user.$save().then($scope.loadUsers);
      };
      $scope.deleteUser = function(user) {
        return user.$delete().then($scope.loadUsers);
      };
      return $scope.loadUsers();
    }
  ]);

}).call(this);
