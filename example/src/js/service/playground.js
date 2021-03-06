// Generated by CoffeeScript 2.1.1
(function() {
  var app;

  app = angular.module('example.api.playground', []);

  app.factory('User', [
    '$q',
    function($q) {
      var MockUser,
    i,
    len,
    ref,
    storage,
    user,
    username;
      storage = {};
      MockUser = class MockUser {
        constructor(params) {
          var key,
    value;
          for (key in params) {
            value = params[key];
            this[key] = value;
          }
        }

        static query() {
          var dfr,
    key,
    val,
    values;
          dfr = $q.defer();
          values = (function() {
            var results;
            results = [];
            for (key in storage) {
              val = storage[key];
              results.push(val);
            }
            return results;
          })();
          dfr.resolve(values);
          values.$promise = dfr.promise;
          return values;
        }

        static save(params) {
          var user;
          user = new this(params);
          user.$save();
          return user;
        }

        $save() {
          var dfr;
          storage[this.username] = this;
          dfr = $q.defer();
          dfr.resolve(this);
          return dfr.promise;
        }

        $delete() {
          var dfr;
          delete storage[this.username];
          dfr = $q.defer();
          dfr.resolve();
          return dfr.promise;
        }

      };
      ref = ['bob', 'sally', 'joe', 'rachel'];
      for (i = 0, len = ref.length; i < len; i++) {
        username = ref[i];
        user = new MockUser({
          username: username
        });
        storage[user.username] = user;
      }
      return MockUser;
    }
  ]);

}).call(this);
